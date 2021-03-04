const { rule, shield, allow, deny, and, or} = require('graphql-shield');
const { validateEmail, validatePassword, isAdminUser } = require('./utils')
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
    if (!validatePassword(args.password)) return new Error('Password is invalid!')

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
    if(!args.id) return new Error('Id is missing')
    args.id = args.id.trim()
    return args.id !== ''
  }
);

const requireFriendId = rule({ cache: "contextual" })(
  async (parent, args, context ) => {
    if(!args.friendId) return new Error('friends Id is missing')
    args.friendId = args.friendId.trim()
    return args.friendId !== ''
  }
);

const requireRoomId = rule({ cache: "contextual" })(
  async (parent, args, context ) => {
    if(!args.roomId) return new Error('friends Id is missing')
    args.roomId = args.roomId.trim()
    return args.roomId !== ''
  }
);

//Permissions
const permissions = shield({
    Query: {
      '*': deny,
      users: isAdmin,
      rooms: isAdmin,
      messages: isAdmin,
      Room: or(and(isOwnerRoom), isAdmin)
    },
    User: {
      '*': allow,
      password: isAdmin,
      hashedPassword: isAdmin,
      status: isAdmin,
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
      addFriend: and(requireFriendId, isAuthenticated),
      deleteFriend: and(requireFriendId, isAuthenticated),
      blockFriend: and(requireFriendId, isAuthenticated),

      //room
      createRoom: and(requireFriendId, isAuthenticated),
      deleteRoom: and(requireId, isAuthenticated),

      //message
      createMessage: and(isAuthenticated, requireRoomId, isValidatedWriteMessage),
      updateMessage: and(isAuthenticated, requireId, isValidatedWriteMessage),
      deleteMessage: and(requireId, isAuthenticated),
    },
  }, { allowExternalErrors: true })

module.exports = permissions
