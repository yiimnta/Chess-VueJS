const typeDefs = `
type User{
    name: String!
    email: String!
    password: String!
    createdAt: DateTime
}

type Message{
    content: String
    time: DateTime
    status: String
    author: [User] @relation(name: "IN_USER", direction: IN)
    room: [Room] @relation(name: "OUT_ROOM", direction: OUT)
    createdAt: DateTime
    createdBy: Int
}

type Room{
    title: String
    desc: String
    createdAt: DateTime
    createdBy: Int
}

type Permisson{
    user: User
    permission: String # function  edit#delete
    route: String  #example login
    createdAt: DateTime
    createdBy: Int
}

type Query{
    user: [User]
}

type Mutation{
    login(email: String, password: String): String
    signup(email: String!, password: String!, name: String!): String # return Token for user
}
`;
export default typeDefs;
