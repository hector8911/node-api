'use strict';

const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const get = async(params) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('viaje');
        const list = await pool.request()
        .input('idTransportista', sql.VarChar, params.idTransportista)
        .input('fechai', sql.Date, params.fechai)
        .input('fechaf', sql.Date, params.fechaf)
        .query(sqlQueries.report);
        return list.recordset;
    } catch (error) {
        return error.message;
    }
}

const create = async(viaje) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('viaje');
        
        const insert = await pool.request()
        .input('idTransportista', sql.VarChar, viaje.idTransportista)
        .input('fecha', sql.Date, viaje.fecha)
        .input('tarifa', sql.Money, viaje.tarifa)
        .query(sqlQueries.create);

        return insert.recordset;
    } catch (error) {
        return error.message;
    }
}

const createDetail = async(viaje) =>{
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('viaje');
        const onevent = await pool.request()
            .input('idViaje', sql.Int, viaje.idViaje)
            .input('idColaborador', sql.Int, viaje.idColaborador)
            .input('distancia', sql.Int, viaje.distancia)
            .query(sqlQueries.createDetail);
        return onevent.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    get,
    create, 
    createDetail
}