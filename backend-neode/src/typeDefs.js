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
    createRoom(friendId: String!): Room
    addFriend(friendId: String!): User
  }
`

module.exports = typeDefs
