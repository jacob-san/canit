const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys =    require('../configs/keys');

const User = mongoose.model('users')

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googlClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
        .then((existingUser) => {
            if(existingUser) {
                console.log("user already exists")
                done();
            }
            else {                
                new User({ googleId: profile.id }).save()
                    .then((user) => {
                        done(null, user);
                    })
            }
        })
}
));