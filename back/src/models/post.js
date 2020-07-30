const {Schema,model} = require('mongoose');

    const PostSchema = new Schema({
        admin:{
            type:String,
            required:true
        },
        titulo:{
            type:String,
            required: true
        },
        url:{
            type:String,
            required: true
        },
        imagen:{
            type:String,
            required:true
        },
        descripcion:{
            type:String,
            required:true
        },
        categoria:{
            type: String, 
            required:true
        },
        status:{
            type: String,
            required:true,
        }
    },{
        timestamps:true
    })

    module.exports = model('Post',PostSchema);