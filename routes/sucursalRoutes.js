'use strict';

const express = require('express');
const sucursalController = require('../controllers/sucursalController');
const router = express.Router();

const {get, getSucursal} = sucursalController;

router.get('/sucursal', get);
router.get('/sucursal/:id', getSucursal);

module.exports = {
    routes: router
}