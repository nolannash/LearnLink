const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Teacher = mongoose.model('Teacher');
const Student = mongoose.model('Student');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET_KEY;

passport.use(
	new JwtStrategy(opts, (jwt_payload, done) => {
		console.log(jwt_payload);
		if (jwt_payload.role === 'teacher') {
			Teacher.findById(jwt_payload.id)
				.then((teacher) => {
					if (teacher) {
						return done(null, teacher);
					}
					return done(null, false);
				})
				.catch((err) => done(err, false));
		} else if (jwt_payload.role === 'student') {
			Student.findById(jwt_payload.id)
				.then((student) => {
					if (student) {
						return done(null, student);
					}
					return done(null, false);
				})
				.catch((err) => done(err, false));
		} else {
			return done(null, false);
		}
	})
);

module.exports = passport;
