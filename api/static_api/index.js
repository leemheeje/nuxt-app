const request = require('request')

export default (filename) => new Promise((resolve, reject) => {
	request(`/static_api/${filename}.json`, (error, { body }) => {
		resolve(body)
	})
})     