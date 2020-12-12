const router = require('express').Router();
const apiRouterAuth = require('./api/signin');  

// manejador de rutas
router.use('/auth',apiRouterAuth);

module.exports = router;