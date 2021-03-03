const { rule, shield, allow, deny} = require('graphql-shield');
const { validateEmail, validatePassword } = require('./utils')
const User = require('./dataSources/enities/User')

const isAuthenticated = rule({ cache: "contextual" })(
  async (_parent, _args, context ) => {
    if(!context.user) return false
    let isExist = await User.exists(context.user);
    return isExist;
  }
);

const isValidatedSignup = rule({ cache: "contextual" })(
  async (_parent, _args, context ) => {

    if (!_args) return new Error('Login failed')

    //check email
    if (!validateEmail(_args.email)) return new Error('Email is invalid!')

    //check exist email
    if (await User.exists( { email: _args.email } )) return new Error('Email exists!')

    //check password
    _args.password = _args.password.trim()
    if (!validatePassword(_args.password)) return new Error('Password is invalid!')

    return true
  }
);

//Permissions
const permissions = shield({
    Query: {
      '*': deny,
      users: isAuthenticated,
      rooms: isAuthenticated,
      messages: isAuthenticated
    },
    Mutation: {
      '*': deny,
      createRoom: isAuthenticated,
      login: allow,
      signup: isValidatedSignup,
      addFriend: isAuthenticated
    },
  }, { allowExternalErrors: true })

module.exports = permissions
