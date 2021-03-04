const { neo4jgraphql } = require('neo4j-graphql-js')
const { delegateToSchema } = require('@graphql-tools/delegate')

const delegateQuery = async (field, args, context, info, subschema) => {
  
  const [ resolvedObj ] = await delegateToSchema({
    schema: subschema,
    operation : 'query',
    fieldName: field,
    args: args,
    context,
    info
  })

  return resolvedObj
}

const resolvers = ({subschema}) => ({
  Query: {
    messages: async (parent, args, context, resolveInfo) => {
      return neo4jgraphql(parent, args, context, resolveInfo);
    },
    rooms: async (parent, args, context, resolveInfo) => {
      return neo4jgraphql(parent, args, context, resolveInfo);
    },
    users: async (parent, args, context, resolveInfo) => {
      return neo4jgraphql(parent, args, context, resolveInfo);
    }
  },
  Mutation: {
    signup: async (parent, args, context) => {
      return await context.dataSources.usersDataSrc.signup(args.name, args.email, args.password)
    },
    login: async (parent, args, context) => {
      return await context.dataSources.usersDataSrc.login(args.email, args.password)
    },
    deleteUser: async (parent, args, context) => {
      return await context.dataSources.usersDataSrc.login(args.email, args.password)
    },
    updateUser: async (parent, args, context) => {
      return await context.dataSources.usersDataSrc.login(args.email, args.password)
    },
    addFriend: async (parent, args, context, info) => {
      await context.dataSources.usersDataSrc.addFriend(args.friendId)
      return await delegateQuery('User', context.user, context, info, subschema)
    },
    deleteFriend: async (parent, args, context, info) => {
      await context.dataSources.usersDataSrc.addFriend(args.friendId)
      return await delegateQuery('User', context.user, context, info, subschema)
    },
    blockFriend: async (parent, args, context, info) => {
      await context.dataSources.usersDataSrc.addFriend(args.friendId)
      return await delegateQuery('User', context.user, context, info, subschema)
    },
    createRoom: async (parent, args, context, info) => {
      const createdRoom = await context.dataSources.roomsDataSrc.createRoom(args.friendId)
      return await delegateQuery('Room', {id: createdRoom.id}, context, info, subschema)
    },
    deleteRoom: async (parent, args, context, info) => {
      const createdRoom = await context.dataSources.roomsDataSrc.createRoom(args.friendId)
      return await delegateQuery('Room', {id: createdRoom.id}, context, info, subschema)
    },
    updateRoom: async (parent, args, context, info) => {
      const createdRoom = await context.dataSources.roomsDataSrc.createRoom(args.friendId)
      return await delegateQuery('Room', {id: createdRoom.id}, context, info, subschema)
    },
    createMessage: async (parent, args, context, info) => {
      const createdMessage = await context.dataSources.messagesDataSrc.writeMessage(args.roomId, args.content)
      return await delegateQuery('Message', {id: createdMessage.id}, context, info, subschema)
    },
    updateMessage: async (parent, args, context, info) => {
      const createdMessage = await context.dataSources.messagesDataSrc.createMessage(args.roomId, args.content)
      return await delegateQuery('Message', {id: createdMessage.id}, context, info, subschema)
    },
    deleteMessage: async (parent, args, context, info) => {
      const createdMessage = await context.dataSources.messagesDataSrc.writeMessage(args.roomId, args.content)
      return await delegateQuery('Message', {id: createdMessage.id}, context, info, subschema)
    }
  }
})

module.exports = resolvers
