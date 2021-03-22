'use strict';

const data = require('../data/login');

const getUser = async(request, response, next) =>{
    try {
        const us = request.params.us;
        const pass = request.params.pass;

        const dato = await data.getUser(us, pass);
        response.json(dato)
        //response.send(dato);

    } catch (error) {
        response.status(404).send(error.message);
    }
}

module.exports = {
    getUser
}