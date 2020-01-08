require('dotenv').config()
const withSass = require('@zeit/next-sass')
module.exports = withSass({
	env: {
		API_ROOT: process.env.API_ROOT,
	},
})