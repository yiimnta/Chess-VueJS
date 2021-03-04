const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    messages: [Message]
    users: [User]
    rooms: [Room]
  }

  type Mutation {
    login(email: String!, password: String!): String
    signup(name: String!, email: String!, password: String!, avatar: String, role: Int): String
    deleteUser(id: String!): User
    updateUser(id: String!, email: String, name: String, avatar: String, password: String ): User
    updateProfile(id: String!, name: String, avatar: String, password: String): User
    
    addFriend(friendId: String!): User
    deleteFriend(friendId: String!): User
    blockFriend(friendId: String!): User
    
    createRoom(friendId: String!): Room
    deleteRoom(id: String!): Room

    createMessage(roomId: String!, content: String!): Message
    updateMessage(id: String!, content: String!): Message
    deleteMessage(id: String!): Message
  }
`

module.exports = typeDefs
