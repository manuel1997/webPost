const categoriaController = {};


const Categoria = require('../../models/categoria');

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
    const {numero,nombre} = req.body;
    await Categoria.findByIdAndUpdate(id,{numero,nombre});
    return res.json({notifi: 'categoria Editado',});
}

categoriaController.borrarCategoria = async (req,res) => {
    const categoria = await Categoria.findByIdAndDelete(req.params.id);
    return res.json({notifi:'categoria Eliminada'});
};

module.exports = categoriaController;