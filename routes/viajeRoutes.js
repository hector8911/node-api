'use strict';

const express = require('express');
const viajeController = require('../controllers/viajeController');
const router = express.Router();

//router.get('/viajes', viajeController.get);

router.post('/viajes/create', viajeController.create);

//router.put('/viajes/edit/:id', viajeController.update);
router.post('/viajes/createDetail', viajeController.createDetail);
router.post('/viajes/report', viajeController.get);

module.exports = {
    routes: router
}