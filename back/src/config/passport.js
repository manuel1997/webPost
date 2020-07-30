const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Admin = require('../models/admins');

passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'contrasena'
}, async (email,contrasena,done) => {

        //match email user
       const admin = await Admin.findOne({email})
       if(!admin){
        return done(null,false,{ message: 'Not user found'});
       }else{
           //match password admin
          const match =  await admin.matchPassword(contrasena);
          if(match){
              return done(null,admin);
          }else{
              return done(null, false,{message: 'incorrect password'});
          }
       }
}));

passport.serializeUser((admin, done) => {
    done(null,admin.id);
});

passport.deserializeUser((id, done) =>{
    Admin.findById(id,(err,admin) => {
        done(err,admin);
    })
});