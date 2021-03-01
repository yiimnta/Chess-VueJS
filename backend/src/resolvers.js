import neo4jgraphql from "neo4j-graphql-js";
// const neo4jgraphql = _neo4jgraphql;

const resolvers = {
    Query: {
        user(object, params, ctx, resolveInfo) {
            return neo4jgraphql(object, params, ctx, resolveInfo);
        }
    },
    Mutation: {
        login: async(object, params, ctx, resolveInfo) => {
            return neo4jgraphql(object, params, ctx, resolveInfo);
        }
    }
};

export default resolvers
