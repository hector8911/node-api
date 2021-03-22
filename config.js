'use stric';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {PORT, HOST, HOST_URL, SQL_USER, SQL_PASSWORD, SQL_DATABASE, SQL_SERVER} = process.env;

const sqlscrypt = process.env.ENCRYPT === "true";

assert(PORT, 'port required');
assert(HOST, 'host required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: sqlscrypt,
            enableArithAbort: true
        }
    }
}
