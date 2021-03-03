import neo4jgraphql from "neo4j-graphql-js";
// const neo4jgraphql = _neo4jgraphql;
import jwttoken from './service/jwttoken.js'

const resolvers = {
    Query: {
        user(object, params, ctx, resolveInfo) {
            return neo4jgraphql(object, params, ctx, resolveInfo);
        }
    },
    Mutation: {
        login: async (object, params, context, resolveInfo) => {
            const  session = context.driver.session();
            let query = "MATCH (u:User {email: $email, password: $password}) RETURN u { .name , .password} SKIP 0";
            const email = params.email;
            const password = params.password;
            const result  = await session.run(query, {email, password}).
                then(result => {
                    if (result.records){
                       return  jwttoken.encode(email, password);
                    } else{
                        return null;
                    }
                })
                .catch(error => {
                    console.log(error)
                });
                // .then(() => session.close());
            return result;
            session.close();
        }
    }
};

export default resolvers
