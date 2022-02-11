//não é possível ainda usar o export default  portanto a sintaxe segue a linguagem js.

import path from 'path';

module.exports = {
    client: 'mysql2',
    version: '8.0',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '123456',
        database: 'dbteste'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
}