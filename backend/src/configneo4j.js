import neo4j from 'neo4j-driver';
import * as configdb from '../config.js'

const driver = neo4j.driver(
    'bolt://3.92.18.75:7687',
    // neo4j.auth.basic('neo4j', '123456')
    neo4j.auth.basic('neo4j', 'neo4j')
);

export default driver
