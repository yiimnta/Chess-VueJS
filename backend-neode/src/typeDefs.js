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
    
    # id: User Id
    deleteUser(id: String!): User
    updateUser(id: String!, email: String, name: String, avatar: String, password: String ): User
    updateProfile(id: String!, name: String, avatar: String, password: String): User
    addFriend(id: String!): User
    acceptFriend(id: String!): User
    deleteFriend(id: String!): User
    blockFriend(id: String!): User
    createRoom(id: String!): Room
    
    # id: Room Id
    deleteRoom(id: String!): Room
    createMessage(id: String!, content: String!): Message

    # id: Message Id
    updateMessage(id: String!, content: String!): Message
    deleteMessage(id: String!): Message
  }
  
  extend type User {
    invitations:[User]
  }
`

module.exports = typeDefs
