import neo4jgraphql from "neo4j-graphql-js";
// const neo4jgraphql = _neo4jgraphql;
import jwttoken from './service/jwttoken.js'
import bcypt from './service/bcrypt.js'

const resolvers = {
    Query: {
        user(object, params, ctx, resolveInfo) {
            return neo4jgraphql(object, params, ctx, resolveInfo);
        }
    },
    Mutation: {
        login: async (object, params, context, resolveInfo) => {
            const session = context.driver.session();
            let query = "MATCH (u:User {email: $email}) RETURN ID(u), u.password as password SKIP 0";
            const email = params.email;

            const result = await session.run(query, {email}).then(result => {
                let passinDB = result.records[0].get('password')
                const decryptPassword = bcypt.decryptPassword(params.password, passinDB);
                if (decryptPassword === true){
                    let id = result.records[0]._fieldLookup.id;
                    if (result.records) {
                        return jwttoken.encode(id, "");
                    } else {
                        return null;
                    }
                }else{
                    return false;
                }

            })
                .catch(error => {
                    console.log(error)
                }).finally(() => session.close());
            return result;
        },
        signup: async (object, params, context, resolveInfo) => {
            const session = context.driver.session();
            let hashPassword = await bcypt.hashPassword(params.password);
            console.log(hashPassword)
            let query = "CREATE (u:User {name: $name, email: $email, password: $password}) RETURN u.name as name, u.email as email";
            let email = params.email
            let name = params.name

            const result = await session.run(query, {
                name, email, hashPassword})
                .then(response => {
                if (response){
                    return 'oki';
                }else{
                    return false;
                }
            }).catch(error => {
                console.log(error)
            }).finally(() => session.close());
            return result;
        }
    }
};

export default resolvers
