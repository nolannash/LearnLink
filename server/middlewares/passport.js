const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Teacher = mongoose.model('Teacher');
const Student = mongoose.model('Student');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromExtractors([
	ExtractJwt.fromUrlQueryParameter('token'),
	ExtractJwt.fromAuthHeaderAsBearerToken(),
	(req) => {
		let token = null;
		if (req && req.cookies) {
			token = req.cookies['jwt'];
		}
		return token;
	},
]);

opts.secretOrKey = process.env.JWT_SECRET_KEY;

passport.use(
	new JwtStrategy(opts, (jwt_payload, done) => {
		console.log('Passport.js:', jwt_payload); //!
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
// Custom middleware to extend Passport's authenticate method
const auth = (roles = []) => {
	return (req, res, next) => {
		// Use Passport to authenticate
		passport.authenticate('jwt', { session: false }, (err, user, info) => {
			// Debugging lines
			console.log('Error:', err);
			console.log('User:', user);
			console.log('Info:', info);

			if (err || !user) {
				return res.status(401).json({ message: 'Unauthorized' });
			}

			// Attach user to the request object
			req.user = user;

			// Check if roles are provided for additional verification
			if (roles.length && !roles.includes(user.role)) {
				return res.status(403).json({ message: 'Forbidden, wrong role' });
			}

			// Continue to the next middleware if authentication was successful
			next();
		})(req, res, next);
	};
};

module.exports = { passport, auth };
