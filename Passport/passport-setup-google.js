
/*This file is to be imported in the main app.js*/
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20');


passport.serializeUser(function(user,done){
    console.log('user serialized',user);
    done(null,user._id);
});

passport.deserializeUser(function(id,done){
    SchemaNameToBeIncluded.findById(id)
        .then(function(user){
            console.log('user deserialized',user);
        done(null,user);
    });
});



passport.use(new googleStrategy({
    callbackURL:'/auth/google/redirect',
    clientID:key.clientID,
    clientSecret:key.clientSecret
    },function(accessToken, refreshToken, profile, done){
        //profile has your google info
    }
));


/*Routers */

router.get('/google',passport.authenticate('google',{
    scope:['profile']    //include everything you want from your google profile in scope
}));

router.get('/google/redirect',passport.authenticate('google'),function(req,res){
    /*redirect from google goes first in the passport setup callback function

   here=>> function(accessToken, refreshToken, profile, done){
        //profile has your google info
    }

    Then Here */
});

/*app.js (creates cookie session and initializes passport)*/

const cookieSession = require('cookie-session');
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys:[keys.key],
    name:'cookie name!!!!'
}));

app.use(passport.initialize());
app.use(passport.session());



/*
usable info!!!!

you can use 


req.user in any route to get the whole data of the user as it will be deserialized everytime

req.logout() to logout of a session 

req.session has the required undecrypted _id we serialized

*/