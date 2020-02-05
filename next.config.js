require('dotenv').config()
const withSass = require('@zeit/next-sass')
module.exports = withSass({
	env: {
		API_ROOT: process.env.API_ROOT,
		CLIENT_NAME: process.env.CLIENT_NAME,
		SIGNUP_DISABLED: process.env.SIGNUP_DISABLED ? true : false,
	},
})