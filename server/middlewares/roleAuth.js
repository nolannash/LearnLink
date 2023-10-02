module.exports = (roles) => {
	return (req, res, next) => {
		console.log(req.user);
		const userRole = req.user.role;
		if (roles.includes(userRole)) {
			next();
		} else {
			res.status(403).json({ error: 'Access Denied' });
		}
	};
};
