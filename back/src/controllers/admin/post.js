const multer =require('multer');
const  fs = require('fs');
const path = require('path');

const PostController = {};

const Post = require('../../models/post');


PostController.cargarImg = multer({
    storage:multer.diskStorage({
        destination: path.join(__dirname,'../../public/post_img'),
        filename:(req,file,cb) => {
            cb(null, Date.now() + path.extname(file.originalname));
        }
      }),
      dest: path.join(__dirname,'../../public/post_img'),
      limits:{fieldSize:1000000},
      fileFilter:(req,file,cb) =>{
        const filetype = /jpeg|jpg|png|gif|/;
        const mimetype = filetype.test(file.mimetype);
        const extname = filetype.test(path.extname(file.originalname));
        if(mimetype && extname){
          return cb(null,true);
      }
      cb("Error archivo no es valido");
      }
  })

  PostController.crearPost = async (req,res) =>{
    const {admin,titulo,descripcion,categoria,status} = req.body;
    const url = titulo.replace(/\+| /g, "-").replace(/[&\/\\#,+()$.'":"!*?<>{}]/g, '').toLowerCase()  ; 
    const imagen = req.file.filename;
    const nuevoPost = new Post({admin,titulo,url,descripcion,categoria,status,imagen});
    await nuevoPost.save();
    return res.json({notifi:'Post Creado'});
};

PostController.listarPost = async (req,res) => {
    const posts = await Post.find()
    return res.json(posts);
}

PostController.verPost = async (req,res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    return res.json(post);
}

PostController.borrarPost = async (req,res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    await fs.unlinkSync(path.resolve('./src/public/post_img/'+ post.imagen));
    return res.json({notifi:'Post Eliminado'});
};

PostController.editarPost = async (req,res) => {
    const {id} = req.params;
    const {titulo,descripcion,categoria,status} = req.body;
    await Post.findByIdAndUpdate(id,{titulo,descripcion,categoria,status});
    return res.json({notifi: 'Post Editado',});
}


module.exports = PostController;