import _neo4jgraphql from "neo4j-graphql-js";
const neo4jgraphql = _neo4jgraphql;



const resolvers = {
    Query: {
        user(object, params, ctx, resolveInfo) {
            return neo4jgraphql(object, params, ctx, resolveInfo);
        }
    },
    MUTATION: {
        login: async(object, params, ctx, resolveInfot) => {
            let session = ctx.driver.session();
            let query = "MATCH (user:User {name:'vantinh'})" +
                "RETURN user { .name , .password}" +
                "AS user" +
                "SKIP 0";

            const result = session.run(query, args).then(
                result => {
                    result.records.map(record => record.get('name'))
                }
            );

            if (result){
                console.log(result);
            }
        }

    }
};

export default resolvers
