'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const get = async(id) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('colaborador');
        const dato = await pool.request().input('idSucursal', sql.Int, id).query(sqlQueries.list);
        return dato.recordset;
    } catch (error) {
        return error.message;
    }
}

const getTransportista = async(id) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('colaborador');
        const dato = await pool.request().input('idSucursal', sql.Int, id).query(sqlQueries.listTransportistas);
        return dato.recordset;
    } catch (error) {
        return error.message;
    }
}

const allTransportistas = async() =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('colaborador');
        const dato = await pool.request().query(sqlQueries.allTransportistas);
        return dato.recordset;
    } catch (error) {
        return error.message;
    }
}

const list = async() =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('colaborador');
        const dato = await pool.request().query(sqlQueries.listar);
        return dato.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateColaboradorXsucursal = async (idSucursal, newdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('colaborador');
        const update = await pool.request()
            .input('newidSucursal', sql.Int, newdata.idSucursal)
            .input('distancia', sql.Int, newdata.distancia)
            .input('idColaborador', sql.Int, newdata.idColaborador)
            .input('idSucursal', sql.Int, idSucursal)
            .query(sqlQueries.updateColaboradorXsucursal);
        
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const sucursalXcolaborador = async(idColaborador) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('colaborador');
        const update = await pool.request()
            .input('idColaborador', sql.Int, idColaborador)
            .query(sqlQueries.sucursalesXcolaborador);
        
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const colaboradorXsucursal = async(idColaborador,idSucursal) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('colaborador');
        const dato = await pool.request()
            .input('idColaborador', sql.Int, idColaborador)
            .input('idSucursal', sql.Int, idSucursal)
            .query(sqlQueries.colaboradorXsucursalById);
        
        return dato.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    get,
    getTransportista,
    list,
    updateColaboradorXsucursal,
    sucursalXcolaborador,
    colaboradorXsucursal,
    allTransportistas
}