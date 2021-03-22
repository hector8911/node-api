'use strict';

const express = require('express');
const colaboradorController = require('../controllers/colaboradorController');
const router = express.Router();


router.get('/colaborador/:id', colaboradorController.get);

router.get('/transportista/:id', colaboradorController.getTransportista);
router.get('/transportistas', colaboradorController.allTransportistas);
router.get('/colaboradores', colaboradorController.list);
router.get('/sucursalesxcolaborador/:idColaborador', colaboradorController.sucursalXcolaborador);

router.get('/colaboradorxsucursal/:idColaborador/:idSucursal', colaboradorController.colaboradorXsucursal);

router.put('/colaboradorxsucursal/update/:idSucursal', colaboradorController.updateColaboradorXsucursal);

module.exports = {
    routes: router
}