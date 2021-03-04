const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    messages: [Message]
    users: [User]
    rooms: [Room]
  }

  type Mutation {
    login(email: String!, password: String!): String
    signup(name: String!, email: String!, password: String!): String
    deleteUser(id: String!): User
    updateUser(id: String!, ): User
    
    addFriend(friendId: String!): User
    deleteFriend(friendId: String!): User
    blockFriend(friendId: String!): User
    
    createRoom(friendId: String!): Room
    deleteRoom(id: String!): Room
    updateRoom(id: String!): Room

    createMessage(roomId: String!, content: String!): Message
    updateMessage(id: String!, content: String!): Message
    deleteMessage(id: String!): Message
  }
`

module.exports = typeDefs
