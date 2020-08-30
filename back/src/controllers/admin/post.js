const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PostController = {};

const Post = require('../../models/post');


PostController.cargarImg = multer({
    storage: multer.diskStorage({
        destination: path.join(__dirname, '../../public/post_img'),
        filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname));
        }
    }),
    dest: path.join(__dirname, '../../public/post_img'),
    limits: { fieldSize: 1000000 },
    fileFilter: (req, file, cb) => {
        const filetype = /jpeg|jpg|png|gif|/;
        const mimetype = filetype.test(file.mimetype);
        const extname = filetype.test(path.extname(file.originalname));
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error archivo no es valido");
    }
}).single('imagen');

PostController.resizeImg = async (req, res) => {
    var date = new Date;
    var d = date.getDate();
    var m = date.getMonth()+1;
    var a = date.getFullYear();
    var fech = d+'-'+m+'-'+a;
    try {
       await sharp(req.file.path).resize(740).toFile(path.join(__dirname, `../../public/post_img/${req.file.originalname.split('.').slice(0, -1)}-${fech}${path.extname(req.file.originalname)}`), (err, resizeImage) => {

             fs.unlinkSync(req.file.path)
            if (err) {
                console.log(err);
            }
        })
    const { admin, titulo, descripcion, categoria, status, alt} = req.body;
    const url = titulo.replace(/\+| /g, "-").replace(/[&\/\\#,+()$.'":"!*?<>{}]/g, '').toLowerCase();
    const imagen = `${req.file.originalname.split('.').slice(0, -1)}-${fech}${path.extname(req.file.originalname)}`;
    const nuevoPost = new Post({ admin, titulo, url, descripcion, categoria, status, imagen, alt });
    await nuevoPost.save();
    return res.json({ notifi: 'Post Insertado Correctamente' });
    } catch (error) {
        console.error(error);
    }
};

PostController.crearPost = async (req, res) => {
    const { admin, titulo, descripcion, categoria, status } = req.body;
    const url = titulo.replace(/\+| /g, "-").replace(/[&\/\\#,+()$.'":"!*?<>{}]/g, '').toLowerCase();
    const imagen = req.file.filename;
    const nuevoPost = new Post({ admin, titulo, url, descripcion, categoria, status, imagen });
    await nuevoPost.save();
    return res.json({ notifi: 'Post Insertado Correctamente' });
};

PostController.listarPost = async (req, res) => {
    const posts = await Post.find().sort({_id: -1}).limit(9)
    return res.json(posts);
}

PostController.verPost = async (req, res) => {
    const { id } = req.params;
    const post = await Post.findById(id);
    return res.json(post);
}

PostController.borrarPost = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    await fs.unlinkSync(path.resolve('./src/public/post_img/' + post.imagen));
    return res.json({ notifi: 'Post Eliminado' });
};

PostController.editarPost = async (req, res) => {
    const { id } = req.params;
    const { titulo, descripcion, categoria, status, alt } = req.body;
    const url = titulo.replace(/\+| /g, "-").replace(/[&\/\\#,+()$.'":"!*?<>{}]/g, '').toLowerCase();
    await Post.findByIdAndUpdate(id, { titulo, url, descripcion, categoria, status, alt });
    return res.json({ notifi: 'Post Editado', });
}


module.exports = PostController;