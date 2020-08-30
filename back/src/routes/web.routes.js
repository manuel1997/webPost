const {Router} = require('express');
const router = Router();




     //RUTA DE INDEX
     const {listarCategorias,buscar,post1,post2,post3,postIntermedios,postFinales} = require('../controllers/web/index');
    router.get('/api/listarCategorias',listarCategorias);
    router.get('/api/busqueda/:datos',buscar);
    router.get('/api/post1',post1);
    router.get('/api/post2',post2);
    router.get('/api/post3',post3);
    router.get('/api/postIntermedios',postIntermedios);
    router.get('/api/postFinales',postFinales);

     //RUTA DE POST CATEGORIAS
     const {postCategoria} = require('../controllers/web/vistacategoria');
     router.get('/api/postCategorias/:nombre/:numpage',postCategoria);

      //RUTA VER POST
      const {verPost,relacionados} = require('../controllers/web/vistapost');
      router.get('/api/verPost/:url/:id',verPost);
      router.get('/api/relacionados/',relacionados);

  
     


    module.exports = router;