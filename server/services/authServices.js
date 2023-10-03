const passport = require('passport');

const protect = (role) => {
	return [
		passport.authenticate('jwt', { session: false }),
		(req, res, next) => {
			if (role && req.user && req.user.role !== role) {
				return res.status(403).json({ message: 'Forbidden' });
			}
			next();
		},
	];
};

module.exports = protect;
