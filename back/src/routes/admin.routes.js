const {Router} = require('express');
const router = Router();



    //RUTAS LOGIN
    const {login,verifyToken} = require('../controllers/admin/login');

    router.post('/api/login',login,verifyToken);

    //RUTAS POST
    const {cargarImg,crearPost,listarPost,verPost,borrarPost,editarPost} = require('../controllers/admin/post'); 

    router.post('/api/crearPost',verifyToken,cargarImg,crearPost);
    router.get('/api/listPost',listarPost);
    router.get('/api/post/:id',verPost);
    router.delete('/api/eliminar/:id',verifyToken,borrarPost);
    router.put('/api/editar/:id',verifyToken,editarPost);

    //RUTAS CATEGORIAS
    const {listarCategorias,crearCategoria,editarCategoria,borrarCategoria} = require('../controllers/admin/categorias');

    router.get('/api/listarCategorias',listarCategorias);
    router.post('/api/crearCategoria',verifyToken,crearCategoria);
    router.put('/api/editarCategoria/:id',editarCategoria);
    router.delete('/api/borrarCategoria/:id',verifyToken,borrarCategoria);

    //RUTAS ADMINISTRADOR
    const {crearAdmin,listarAdmin,eliminarAdmin} = require('../controllers/admin/admins');

    router.post('/api/crearAdmin',verifyToken,crearAdmin);
    router.get('/api/listarAdmin',listarAdmin);
    router.delete('/api/eliminarAdmin/:id',verifyToken,eliminarAdmin);


    module.exports = router;