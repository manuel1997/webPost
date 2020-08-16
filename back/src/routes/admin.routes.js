const {Router} = require('express');
const router = Router();



    //RUTAS LOGIN
    const {login,verifyToken} = require('../controllers/admin/login');

    router.post('/login',login,verifyToken);

    //RUTAS POST
    const {cargarImg,resizeImg,crearPost,listarPost,verPost,borrarPost,editarPost} = require('../controllers/admin/post'); 

    router.post('/crearPost',verifyToken,cargarImg,resizeImg);
    router.get('/listPost',listarPost);
    router.get('/post/:id',verPost);
    router.delete('/eliminar/:id',verifyToken,borrarPost);
    router.put('/editar/:id',verifyToken,editarPost);

    //RUTAS CATEGORIAS
    const {listarCategorias,crearCategoria,editarCategoria,borrarCategoria} = require('../controllers/admin/categorias');

    router.get('/listarCategorias',listarCategorias);
    router.post('/crearCategoria',verifyToken,crearCategoria);
    router.put('/editarCategoria/:id',editarCategoria);
    router.delete('/borrarCategoria/:id',verifyToken,borrarCategoria);

    //RUTAS ADMINISTRADOR
    const {crearAdmin,listarAdmin,eliminarAdmin} = require('../controllers/admin/admins');

    router.post('/crearAdmin',verifyToken,crearAdmin);
    router.get('/listarAdmin',listarAdmin);
    router.delete('/eliminarAdmin/:id',verifyToken,eliminarAdmin);


    module.exports = router;