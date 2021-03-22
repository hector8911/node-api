'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyparse = require('body-parser');
const viajeRoutes = require('./routes/viajeRoutes');
const sucursalRoutes = require('./routes/sucursalRoutes');
const loginRoutes = require('./routes/loginRoutes');
const colaboradorRoutes = require('./routes/colaboradorRoutes');

const app = express();

app.use(cors());
app.use(bodyparse.json());

app.use('/api', viajeRoutes.routes);
app.use('/api', sucursalRoutes.routes);
app.use('/api', loginRoutes.routes);
app.use('/api', colaboradorRoutes.routes);

app.listen(config.port, ()=> console.log("exito ", config.port) )