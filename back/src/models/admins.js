const {Schema,model} = require('mongoose');

    const AdminSchema = new Schema({
        nombre:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required:true
        },
        contrasena:{
            type:String,
            required:true
        },
        control:{
            type:String,
            required:true,
            default: '1'
        },
    },{
        timestamps:true
    })

    module.exports = model('Admin',AdminSchema);