/*en caso de  hacer uso con el directorio controlador se 
debe importar como se observa en la siguiente linea, con el nombre del archivo js
que contiene la logica */
// const controller = require('./controller/controller.js');
const express = require('express');
const db = require('./models');
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const apiRouter = require('./routes');

app.use(cors())
// body parser para manejo de los JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// API ENDPOINTS
/*se debe contar un una ruta por medio de método post para el inicio de sesión de la siguiente manera:
'/api/auth/signin'
*/
// Requerimiento Reto 3
app.use('/api', apiRouter);

app.get('*', function(req, res){
    res.status(404).send('PAGINA NO ENCONTRADA')
});

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