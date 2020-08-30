const categoriaController = {};


const Categoria = require('../../models/categoria');
const Post = require('../../models/post');

categoriaController.crearCategoria = async (req,res) =>{
    const {nombre} = req.body;
    const nuevacategoria = new Categoria({nombre});
    await nuevacategoria.save();
    return res.json({notifi:'Categoria Creada'})
};

categoriaController.listarCategorias = async (req,res) => {
    const categorias = await Categoria.find();
    return res.json(categorias);
}

categoriaController.editarCategoria = async (req,res) => {
    const {id} = req.params;
    const {edit,nombre} = req.body;
    await Categoria.findByIdAndUpdate(id,{nombre});
    await Post.updateMany({categoria:edit},{$set:{categoria:nombre}},{multi:true});
    return res.json({notifi: 'categoria Editada',});
}


categoriaController.borrarCategoria = async (req,res) => {
    const categoria = await Categoria.findByIdAndDelete(req.params.id);
    return res.json({notifi:'categoria Eliminada'});
};

module.exports = categoriaController;