const verpostcontroller = {};

const Post = require('../../models/post');

verpostcontroller.verPost = async (req,res) =>{
    const {url,id} = req.params;
    const posts = await Post.findOne({url:url, _id:id});
    return res.json(posts);
}

verpostcontroller.relacionados = async (req,res) =>{
    var categoria = req.query.categoria
    var id = req.query.id 
    const posts = await Post.find( {_id:{$nin:id},categoria:categoria}).sort({_id: -1}).limit(5);
    return res.json(posts);
}

module.exports = verpostcontroller;