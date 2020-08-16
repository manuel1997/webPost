const indexcontroller = {};


const Categorias = require('../../models/categoria')
const Post = require('../../models/post');

indexcontroller.listarCategorias = async (req, res) => {
    const categorias = await Categorias.find();
    return res.json(categorias);
}

function escapeRegex(q) {
    return q.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
   }

   indexcontroller.buscar = async (req,res) => {

    var datos  = req.params.datos;  
    var buesqueda = datos;
  
    var regex = new RegExp(escapeRegex(buesqueda), 'ig');
    var posts = await Post.find({titulo:regex});
    if (posts.length === 0) {
        buesqueda = datos.replace(/\+|de|en/g, "")
        posts = await Post.find(
            { $text: { $search: buesqueda } });      
    }
       return res.json(posts)
    

}


indexcontroller.post1 = async (req, res) => {
    const post = await Post.find().sort({_id: -1}).limit(1);
    return res.json(post);
}

indexcontroller.post2 = async (req, res) => {
    const post = await Post.find().sort({_id: -1}).skip(1).limit(1);
    return res.json(post);
}

indexcontroller.post3 = async (req, res) => {
    const post = await Post.find().sort({_id: -1}).skip(2).limit(1);
    return res.json(post);
}

indexcontroller.postIntermedios = async (req, res) => {
    const posts = await Post.find().sort({_id: -1}).limit(6).skip(3);
    return res.json(posts);
}



indexcontroller.postFinales = async (req, res, next) => {

    let perPage = 3;
    let page = req.query.page || 1;
    let postId = req.query.id;

    if (page == 1) {
        await Post.find()
            .sort({_id: -1})
            .skip(9)
            .limit(perPage)
            .exec((err, posts) => {
                if (err) return next(err);
                res.json({ posts, page });
            })
    } else {
        await Post.find({ _id: { "$gt": postId } })
            .sort({_id: -1})
            .limit(perPage)
            .exec((err, posts) => {
                Post.find({ _id: { "$gt": postId } }).countDocuments((err, conteo) => {
                    if (err) return next(err);
                    return res.json({
                         posts, 
                         page,
                         total:Math.ceil(conteo/perPage),
                         });
                })
            })
    }

}


module.exports = indexcontroller;