const express = require('express');
const app = express();
const controller = require('./controller/controller.js');

//ruta para la API
const apiRouter = require('./routes');

// Recibir peticiones en formato JSON
app.use(express.json());

// API Ruta
app.get('/api', apiRouter);

//ruta de solo Administradores
app.get('/admin', function(req, res){
    res.send('Bienvenido al entorno de Administracion');
});

app.get('*', function(req, res){
    res.status(404).send('PAGINA NO ENCONTRADA')
});
