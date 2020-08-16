const {Router} = require('express');
const router = Router();




     //RUTA DE INDEX
     const {listarCategorias,buscar,post1,post2,post3,postIntermedios,postFinales} = require('../controllers/web/index');
    router.get('/listarCategorias',listarCategorias);
    router.get('/busqueda/:datos',buscar);
    router.get('/post1',post1);
    router.get('/post2',post2);
    router.get('/post3',post3);
    router.get('/postIntermedios',postIntermedios);
    router.get('/postFinales',postFinales);

     //RUTA DE POST CATEGORIAS
     const {postCategoria} = require('../controllers/web/vistacategoria');
     router.get('/postCategorias/:nombre/:numpage',postCategoria);

      //RUTA VER POST
      const {verPost} = require('../controllers/web/vistapost');
      router.get('/verPost/:url/:id',verPost);

  
     


    module.exports = router;