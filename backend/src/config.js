import neo4j from 'neo4j-driver';

const driver = neo4j.driver(
    'bolt://localhost:7687',
    neo4j.auth.basic('neo4j', '123456')
);

export default driver
