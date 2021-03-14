import _makeAugmentedSchema from 'neo4j-graphql-js'
const { makeAugmentedSchema } = _makeAugmentedSchema

import typeDefs from './src/typeDefs.js'
import driver from './src/configneo4j.js'
import resolvers from'./src/resolvers.js'
import jwtSign from './src/service/jwttoken.js'

const schema = makeAugmentedSchema({ typeDefs,
    resolvers,
    config:{
        query: true,
        mutation: true
    } });


import apollo from 'apollo-server'
const { ApolloServer } = apollo

console.log(jwtSign.jwtSign);
const server = new ApolloServer({ schema, context: { driver, jwtSign } });

server.listen(3003, '0.0.0.0').then(({ url }) => {
    console.log(`GraphQL API ready at ${url}`);
});
