const DATA_USERS = require("../api/users/data.json")

const checkBody = (req, res, next) => {
	const username = req.body.username
	if (username) {
		DATA_USERS.map (user => {
		if (username === user.username) req.token = "TOKEN_DUMMY";
		})
	} else req.message = "USERNAME IS NOT PROVIDED"
	next()
}
const checkToken = (req, res, next) => {
	if (req.headers.authorization) console.log("token:", req.headers.authorization)
		else req.message = "AUTHORIZATION TOKEN IS NOT PROVIDED"
	next()
}
module.exports = {
	checkBody,
	checkToken
}