import dotenv from "dotenv"
const getConfig = dotenv.config({path: "backend/.env"});

if (getConfig.error) {
    throw getConfig.error
}

console.log(process.env.NEO4J_HOST.toString());
const JWT_SECRET = process.env.JWT_SECRET.toString();
const NEO4J_USERNAME = process.env.NEO4J_USERNAME.toString();
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD.toString();
const NEO4J_HOST = process.env.NEO4J_HOST.toString();
const NEO4J_DATABASE = process.env.NEO4J_DATABASE.toString();
const NEO4J_ENCRYPTION = process.env.NEO4J_ENCRYPTION.toString();

export default {JWT_SECRET, NEO4J_USERNAME, NEO4J_PASSWORD, NEO4J_HOST, NEO4J_DATABASE, NEO4J_ENCRYPTION};
