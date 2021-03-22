'use strict';

const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

const {getUser} = loginController;

router.get('/login/:us/:pass', getUser);

module.exports = {
    routes: router
}