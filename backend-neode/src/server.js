const {ApolloServer} = require('apollo-server');
const {UsersDataSource} = require('./dataSources/UsersDataSource');
const {RoomsDataSource} = require('./dataSources/RoomsDataSource');
const {MessagesDataSource} = require('./dataSources/MessagesDataSource');
const typeDefs = require('./typeDefs');
const Resolvers = require('./resolver');
const {applyMiddleware} = require('graphql-middleware');
const permissions = require('./permissions');
const {context} = require('./context')
const subschema = require('./neo4j-graphql-js/schema')
const { stitchSchemas } =  require('@graphql-tools/stitch');

const usersMemory = new UsersDataSource();
const roomsMemory = new RoomsDataSource();
const messagesMemory = new MessagesDataSource();

const dataSources = () => ({ usersDataSrc: usersMemory, roomsDataSrc: roomsMemory, messagesDataSrc: messagesMemory })

const resolvers = Resolvers({subschema})

const schema = applyMiddleware(
  stitchSchemas({
    subschemas: [subschema],
    typeDefs,
    resolvers
  }),
  permissions
)

class Server {
  constructor (opts) {
    const defaults = {
      schema,
      context,
      dataSources
    }

    return new ApolloServer({ ...defaults, ...opts })
  }
}

module.exports = Server
