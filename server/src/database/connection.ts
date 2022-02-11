import knex from "knex";

const connection = knex({
    client: 'mysql2',
    version: '8.0',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '123456',
        database: 'dbteste'
    },
    useNullAsDefault: true
});

export default connection;