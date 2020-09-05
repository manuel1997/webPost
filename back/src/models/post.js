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
        sumario:{
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
        alt:{
            type:String,
            required:false
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
            type: Number,
            required:true,
            default:0
        }
    },{
        timestamps:true
    })

    PostSchema.index({titulo: "text"});

    module.exports = model('Post',PostSchema);