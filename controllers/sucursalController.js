'use strict';

const data = require('../data/sucursal');

const get = async(request, response, next) =>{
    try {
        const all = await data.get();
        response.send(all);
    } catch (error) {
         response.status(404).send(error.message);
    }
}

const getSucursal = async(request, response, next) =>{
    try {
        const id = request.params.id;
        const dato = await data.getById(id);
        response.send(dato);oneventonevent
    } catch (error) {
         response.status(404).send(error.message);
    }
}

module.exports = {
    get,
    getSucursal
}