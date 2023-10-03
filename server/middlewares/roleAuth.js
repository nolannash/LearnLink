const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = (roles) => {
	return (req, res, next) => {
		const userRole = req.user.role;
		console.log('roleAuth -user+role:', req.user.role);
		console.log('roleAuth -user:', req.user);
		console.log('roleAuth -role:', req.role, req.teacher, req.student);

		if (roles.includes(userRole)) {
			next();
		} else {
			res.status(403).json({ error: 'Access Denied' });
		}
	};
};
