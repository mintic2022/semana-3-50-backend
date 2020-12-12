const express = require('express');
const morgan = require('morgan')
//ruta para la API
const apiRouter = require('./routes');
const bodyParser = require('body-parser');

const app = express();

// Recibir peticiones en formato JSON
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

// API Ruta
app.use('/api', apiRouter);

//ruta de solo Administradores
app.get('/admin', function(req, res){
    res.send('Bienvenido al entorno de Administracion');
});

app.get('*', function(req, res){
    res.status(404).send('PAGINA NO ENCONTRADA')
});
