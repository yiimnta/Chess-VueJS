require("dotenv").config();
const Neode = require('neode');

if (!process.env.NEO4J_URL || !process.env.NEO4J_USER || !process.env.NEO4J_PASSWORD) {
    throw new Error('NEO4J Configuration missing');
}

const instance = new Neode(process.env.NEO4J_URL, process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
    .withDirectory(`${__dirname}/model`);
module.exports = instance;
