const router = require('express').Router();
const userController = require('../../controllers/UserController');

//Metodos del API
router.get('/list', userController.list);
//router.post('/register', userController.register);

//Requerimiento Reto 3
router.post('/signin', userController.login);

module.exports = router;