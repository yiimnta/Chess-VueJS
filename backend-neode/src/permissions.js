const { rule, shield, allow, deny, and, or} = require('graphql-shield');
const { validateEmail, isGoodPassword, isAdminUser } = require('./utils')
const User = require('./dataSources/enities/User')
const Room = require('./dataSources/enities/Room')

const isAuthenticated = rule({ cache: "contextual" })(
  async (parent, args, context ) => {
    if(!context.user) return false
    let isExist = await User.exists(context.user);
    return isExist;
  }
);

const isOwnerId = rule({ cache: "contextual" })(
  async (parent, args, context ) => {
    if(!context.user) return false
    if(await isAdminUser(context.user)) return true
    return args.id.trim() === context.user.id
  }
);

const isOwnerRoom = rule({ cache: "contextual" })(
  async (parent, args, context ) => {
    if(!context.user) return false
    if(!args.id) return false
    return (await Room.getListUser(args.id)).includes(args.id)
  }
);

const isAdmin = rule({ cache: "contextual" })(
  async (parent, args, context ) => {
    if(!context.user) return false
    return (await isAdminUser(context.user))
  }
);

const isValidatedSignup = rule({ cache: "contextual" })(
  async (parent, args, context ) => {

    if (!args) return new Error('Login failed')

    //check email
    if (!validateEmail(args.email)) return new Error('Email is invalid!')

    //check exist email
    if (await User.exists( { email: args.email } )) return new Error('Email exists!')

    //check password
    args.password = args.password.trim()
    if (!isGoodPassword(args.password)) return new Error('Password is invalid!')

    return true
  }
);

const isValidatedWriteMessage = rule({ cache: "contextual" })(
  async (parent, args, context ) => {
    args.content = args.content.trim()
    if ("" === args.content) return new Error('Content is not empty')

    return true
  }
);

const requireId = rule({ cache: "contextual" })(
  async (parent, args, context ) => {
    if(!args.id || args.id.trim() == '') return new Error('Id is missing')
    return true
  }
);

//Permissions
const permissions = shield({
    Query: {
      '*': deny,
      users: and(isAuthenticated),
      rooms: and(isAuthenticated),
      messages: and(isAuthenticated),
      Room: or(isAuthenticated, isAdmin, isOwnerRoom),
      User: or(isAuthenticated, isAdmin, isOwnerId)
    },
    User: {
      '*': allow,
      messages: or(isAdmin, isOwnerId),
      rooms: or(isAdmin, isOwnerId),
      password: isAdmin,
      hashedPassword: isAdmin,
      status: or(isAdmin, isOwnerId),
      role: isAdmin
    },
    Mutation: {
      '*': deny,
      //user
      login: allow,
      signup: isValidatedSignup,
      deleteUser: and(requireId, isAuthenticated),
      updateUser: and(requireId, isAuthenticated),

      //friend
      addFriend: and(requireId, isAuthenticated),
      acceptFriend: and(requireId, isAuthenticated),
      deleteFriend: and(requireId, isAuthenticated),
      blockFriend: and(requireId, isAuthenticated),

      //room
      createRoom: and(requireId, isAuthenticated),
      deleteRoom: and(requireId, isAuthenticated),

      //message
      createMessage: and(requireId, isAuthenticated, isValidatedWriteMessage),
      updateMessage: and(requireId, isAuthenticated, isValidatedWriteMessage),
      deleteMessage: and(requireId, isAuthenticated),
    },
  }, { allowExternalErrors: true })

module.exports = permissions
