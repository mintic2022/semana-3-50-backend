const router = require('express').Router();
const userController = require('../../controllers/UserController');


router.get('/', userController.listar);
router.post('/register', userController.register);
router.post('/login', userController.login);


module.exports = router;