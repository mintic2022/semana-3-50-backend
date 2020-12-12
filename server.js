/*en caso de  hacer uso con el directorio controlador se 
debe importar como se observa en la siguiente linea, con el nombre del archivo js
que contiene la logica */
// const controller = require('./controller/controller.js');
const express = require('express');
const db = require('./models');
const User = require('./models')
const app = express()
const bodyParser = require('body-parser');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// body parser para manejo de los JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

//Requerimiento del reto 3
// app.post('/api/auth/signin', controller.signin);

//Leer usuarios de la DB
// app.get('/api/users', async (req, res) =>{
//     User.findAll().then(users => res.json(users));
// });

const port = 3000
app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
});

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    next();
} );

module.exports = app;