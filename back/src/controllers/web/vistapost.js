const verpostcontroller = {};

const Post = require('../../models/post');

verpostcontroller.verPost = async (req,res) =>{
    const {url,id} = req.params;
    const posts = await Post.findOne({url:url, _id:id});
    return res.json(posts);
}

module.exports = verpostcontroller;