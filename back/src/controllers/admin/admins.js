const adminController = {};

const Admin = require('../../models/admins');


adminController.crearAdmin = async (req,res) =>{
    console.log(req.body)
    const {nombre,email,contrasena,control} = req.body;
    const admin = new Admin({nombre,email,contrasena,control});
    await admin.save();
    return res.json({notifi:'Usuario Registrado'})
};

adminController.listarAdmin = async (req,res) => {
    const admins = await Admin.find()
    return res.json(admins);
}

adminController.eliminarAdmin = async (req,res) => {
    const administrador = await Admin.findByIdAndDelete(req.params.id);
    return res.json({notifi:'Usuario Eliminado'});
};

module.exports = adminController;