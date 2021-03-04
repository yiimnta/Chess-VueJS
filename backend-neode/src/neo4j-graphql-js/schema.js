const { makeAugmentedSchema } = require('neo4j-graphql-js')
const { gql } = require('apollo-server')

const typeDefs = gql`
type User {
    id: ID!
    name: String!
    avatar: String!
    email: String!
    role: Int!
    status: Int!
    password: String!
    hashedPassword: String!
    rooms: [Room] @relation(name: "JOINED_BY", direction: IN)
    friends: [User] @relation(name: "MADE_FRIEND", direction: OUT)
    messages: [Message] @relation(name: "WORTE", direction: OUT)
}

type Message {
    id: ID!
    content: String!
    time: String!
    status: Int!
    author: User @relation(name: "WORTE", direction: IN)
    room: Room @relation(name: "CONTAIN", direction: IN)
}

type Room {
    id: ID!
    users: [User] @relation(name: "JOINED_BY", direction: OUT)
    messages: [Message] @relation(name: "CONTAIN", direction: OUT)
}`

module.exports = makeAugmentedSchema({ typeDefs });