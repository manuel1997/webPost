const loginController = {};

const Admins = require('../../models/admins');
const jwt = require('jsonwebtoken');
const passport = require('passport');


loginController.login = async (req,res) => {
    const {email,contrasena} = req.body;
    const admin = await Admins.findOne({email});
    if(!admin || admin.contrasena !== contrasena){
        return res.json({notifi:0});
    } 
    const token = jwt.sign({_id: admin._id}, 'secretkey');
    return res.status(200).json({token,admin});
};

loginController.verifyToken = (req,res,next) =>{
    if(!req.headers.authorization){
        return res.status(401).send('aunathorize request');
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('aunathorize request');
    }

    const payload = jwt.verify(token, 'secretkey')
    req.userId = payload._id;
    next();
}

    module.exports = loginController;