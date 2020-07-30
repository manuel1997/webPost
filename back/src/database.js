const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mundo_ionico',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false,
})

    .then(db=>console.log('base de datos conectada'))
    .catch(err=>console.log(err));