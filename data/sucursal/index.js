'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const get = async() =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('sucursal');
        const list = await pool.request().query(sqlQueries.list);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

/* const getById = async(id) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('sucursal');
        const dato = await pool.request().input('id', sql.Int, id).query(sqlQueries.byId);
        return dato.recordset;
    } catch (error) {
        return error.message;
    }
} */

module.exports = {
    get,
    //getById
}