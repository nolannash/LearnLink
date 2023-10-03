const jwt = require('jsonwebtoken');

// Convert Unix timestamp to human-readable date/time
const convertUnixToDate = (timestamp) => new Date(timestamp * 1000).toLocaleString();

// Decode JWT
const decodeJwt = (token) => {
	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
		return { decoded };
	} catch (err) {
		return { error: 'Invalid token', err };
	}
};

module.exports = {
	decodeJwt,
};
