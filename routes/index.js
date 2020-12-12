const router = require('express').Router();
// aqui se configuran los manejadores de cada ruta (articulos, servicios, categorias, usuariops, etc)
const apiRouterUser = require('./api/users');  

router.use('/user',apiRouterUser);



// //manejador de rutas
// router.use('/', apiRouterUSer);

module.exports = router;