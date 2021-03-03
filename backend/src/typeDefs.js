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
    login(email: String, password: String): String
    signup(email: String!, password: String!, name: String!): String
}
`;
export default typeDefs;
