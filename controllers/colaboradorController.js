'use strict';

const data = require('../data/colaborador');

const get = async(request, response, next) =>{
    try {
        const idSucursal = request.params.id;
        const dato = await data.get(idSucursal);
         response.send(dato);
    } catch (error) {
         response.status(404).send(error.message);
    }
}

const getTransportista = async(request, response, next) =>{
    try {
        const idSucursal = request.params.id;
        const dato = await data.getTransportista(idSucursal);
        response.send(dato);
    } catch (error) {
         response.status(404).send(error.message);
    }
}

const allTransportistas = async(request, response, next) =>{
    try {
        const dato = await data.allTransportistas();
        response.send(dato);
    } catch (error) {
         response.status(404).send(error.message);
    }
}

const list = async(request, response, next) =>{
    try {
        const datos = await data.list();
        response.send(datos);
    } catch (error) {
         response.status(404).send(error.message);
    }
}

const updateColaboradorXsucursal = async (req, res, next) => {
    try {
        const idSucursal=  req.params.idSucursal;
        const newdata = req.body;
        const updated = await data.updateColaboradorXsucursal(idSucursal, newdata);
        res.send(updated[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const sucursalXcolaborador = async (req, res, next) => {
    try {
        const idColaborador =  req.params.idColaborador;
        const list = await data.sucursalXcolaborador(idColaborador);
        res.send(list);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const colaboradorXsucursal = async (req, res, next) => {
    try {
        const idColaborador =  req.params.idColaborador;
        const idSucursal =  req.params.idSucursal;
        const dato = await data.colaboradorXsucursal(idColaborador, idSucursal);
        res.send(dato[0]);
    } catch (error) {
        res.status(400).send(error.message);
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