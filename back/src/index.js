const express = require('express');
const path = require('path');
const cors = require('cors');


//Inicializacion
const app = express();
require('./database');


//Settigns
app.use(cors());
app.set('port',3000);
app.use(express.json());

//Middlware
app.use(express.urlencoded({extended:false}));

//Routes
app.use(require('./routes/web.routes'));
app.use(require('./routes/admin.routes'));

//static files
app.use(express.static(path.join(__dirname,'public')))



app.listen(app.get('port'), () => {
    console.log('servidor corriendo en el puerto', app.get('port'))
});
