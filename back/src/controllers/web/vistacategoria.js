const categoriacontroller = {};


const Post = require('../../models/post');


categoriacontroller.postCategoria = async (req, res, next) => {
    let perPage = 5;
    let nombre  = req.params.nombre;
    let page = req.params.numpage || 1;
    
  await  Post
    .find({categoria:nombre})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec((err,posts) => {
        Post.find({categoria:nombre}).countDocuments((err,conteo) =>{
            if(err) return next(err);
            res.json({
                posts,
                itemsTotal:conteo,
                pageSelect:page,
                itemsXpagina:perPage,
                pagesTotal:Math.ceil(conteo/perPage),
            });
  
        })
    })
};




module.exports = categoriacontroller;