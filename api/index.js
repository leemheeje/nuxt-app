const express = require('express')
const app = express()
import static_api from './static_api'


app.get('/', async (req, res, next) => {
	res.send('바봉')
})

app.get('/static_api/:filename', async (req, res, next) => {
	static_api(req.params.filename).then(data=>{
		res.send(data)
	});

})
// app.use(express.json())
module.exports = {
	path: '/api',
	handler: app
}
