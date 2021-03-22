'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getUser = async(us, pass) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('login');
        const dato = await pool.request().input('us', sql.NVarChar, us).input('pass', sql.NVarChar, pass).query(sqlQueries.login);

        return dato.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getUser
}