'use strict';

const data = require('../data/viaje');

const get = async(req, res, next) =>{
    try {
        const params = req.body;
        const list = await data.get(params);
        res.send(list);
    } catch (error) {
         res.status(404).send(error.message);
    }
}

const create = async(req, res, next) =>{
    try {
        const viaje = req.body;
        const idcreate = await data.create(viaje);
        res.send(idcreate);
        //res.json(viaje);
    } catch (error) {
         res.status(404).send(error.message);
    }
}

const createDetail = async(req, res, next) =>{
    try {
        const detalle = req.body;
        const create = await data.createDetail(detalle);
        //res.send(create);
        res.json("exito");
    } catch (error) {
         res.status(404).send(error.message);
    }
}

module.exports = {
    create,
    get,
    createDetail
}