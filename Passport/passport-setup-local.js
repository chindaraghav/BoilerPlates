const passport = require('passport');
const LocalStrategy = require('passport-local');

passport.serializeUser(function(user,done){
    console.log('user serialized',user);
    done(null,user._id);
});

passport.deserializeUser(function(id,done){
    schemaYouWantToUse.findById(id)
        .then(function(user){
            console.log('user deserialized',user);
        done(null,user);
    });
});

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'whatever',      //there are default username and password fields to change them use this <==
    passReqToCallback: true,
    session: false
  },
  function(req, username, password, done) {
     // you can use req.body that was submitted by user form
    
    }
));


/*
    use passport.authenticate('local') 
    to use this authenticator!!
*/