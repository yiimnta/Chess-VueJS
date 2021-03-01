
const typeDefs = `
type User{
    id: ID
    name: String!
    email: String!
    password: String!
    createdAt: DateTime
}
type Query{
    user: [User]
}

type Mutation{
    login(email: String, password: String): String @cypher(statement: "MATCH (u:User {email: $email, password: $password}) RETURN user { .name , .password} AS user SKIP 0")
    signup(email: String!, password: String!, name: String!): String
}
`;
export default typeDefs;
