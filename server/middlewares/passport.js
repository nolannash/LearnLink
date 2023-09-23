const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = mongoose.model('User');
const dotenv = require('dotenv'); // Import dotenv to read environment variables

dotenv.config(); // Load environment variables from .env file

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY; // Use the environment variable directly

module.exports = (passport) => {
    passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then((user) => {
            if (user) {
            return done(null, user);
            }
            return done(null, false);
        })
        .catch((err) => console.log(err));
    })
    );
};
