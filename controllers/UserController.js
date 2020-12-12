const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { use } = require('../routes');
const config = require('../secret/config');

exports.login = async(req,res,next) =>{
    try {
      const user = await models.User.findOne({where: {email: req.body.email}});

      if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) {
                const token = jwt.sign({
                    id : user.id,
                    name : user.username,
                    email:user.email
                    },
                    config.secret,{
                    expiresIn: 600
                    }); // el token vence en 10 min
                res.status(200).send({ accessToken: token });
            } else {
                res.status(401).send({
                    auth: false,
                    accessToken: null,
                    reason: 'Invalid Password!'
                });
            }
        }else{
            res.status(404).send( 'User Not Found.' );
        }
        
    } catch (error) {
        res.status(500).send({ error: 'Error: ' });
        next(error);
    }
};

// exports.register = async(req,res,next) =>{
//     try {
//         req.body.password = bcrypt.hashSync(req.body.password,10);
//         const user = await models.User.create(req.body);
//         res.status(200).json(User);        
//     } catch (error) {
        
//     }
// };

exports.list = async(req,res,next) =>{
    try {
        const users = await models.User.findAll();  
        res.status(200).json(users);       
    } catch (error) {
        res.status(500).send({message: 'error !!!'});
        next(error);
    }
};