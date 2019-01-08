'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();


// Carregar as Rotas//////
const indexRoute = require('./routers/index-route');
const productRoute = require('./routers/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;