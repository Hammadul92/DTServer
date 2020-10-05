const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) =>{
        done(null, user);
    })
})

passport.use(new GoogleStrategy(
    {
        clientID: keys.googleCLientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    }, 
    (accessToken, refreshToken, profile, done) => {
        User.findOne({ googleId: profile.id }).then(retrivedUser => {
            if(retrivedUser){
                done(null, retrivedUser);
            } else{
                var d = Date(Date.now()); 
                date = d.toString();
                new User({ googleId: profile.id, email: profile._json.email, date: date}).save().then( user => {
                    done(null, user);
                });
            }
        })
    })
);
