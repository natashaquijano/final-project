const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const keys = require('./key');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
if (process.env.secretOrKey) {
    opts.secretOrKey = process.env.secretOrKey;
} else {
    opts.secretOrKey = keys.secretOrKey
}

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
            .then(user => {
                if (user) {
                    // If user is found, return null (for error) and user
                    return done(null, user);
                }
                // If no user is found
                return done(null, false)
            })
            .catch(err => console.log(err));
    }));
};
