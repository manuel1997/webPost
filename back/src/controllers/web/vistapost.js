const verpostcontroller = {};

const Post = require('../../models/post');

verpostcontroller.verPost = async (req,res) =>{
    const { titulo,id } = req.params;
    const posts = await Post.findOne({titulo:titulo, _id:id});
    return res.json(posts);
}

module.exports = verpostcontroller;