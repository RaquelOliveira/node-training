'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect('mongodb://admin:balta123@ds253094.mlab.com:53094/node-store');

// Carrega os Models
const product = require('./models/product');

// Carregar as Rotas
const indexRoute = require('./routers/index-route');
const productRoute = require('./routers/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;