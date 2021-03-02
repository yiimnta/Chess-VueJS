import _makeAugmentedSchema from 'neo4j-graphql-js'
const { makeAugmentedSchema } = _makeAugmentedSchema

import typeDefs from './src/typeDefs.js'
import driver from './src/config.js'
import resolvers from'./src/resolvers.js'

const schema = makeAugmentedSchema({ typeDefs,
    resolvers,
    config:{
        query: true,
        mutation: false
    } });


import apollo from 'apollo-server'
const { ApolloServer } = apollo

const server = new ApolloServer({ schema, context: { driver, } });

server.listen(3003, '0.0.0.0').then(({ url }) => {
    console.log(`GraphQL API ready at ${url}`);
});
