let express = require('express')
let bp = require('body-parser')
let cors = require('cors')


require('./server/db/mlab-config.js')

// let session = require('./server-assets/auth/session')
// let authRoutes = require('./server-assets/auth/routes')
let watchlistRoutes = require('./server/routes/watchlistRoutes')


var whitelist = ['http://localhost:8080'];
var corsOptions = {
	origin: function (origin, callback) {
		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true
};

var server = express()
var port = 3000
server.use(bp.json())
server.use(bp.urlencoded({ extended: true }))
server.use(cors(corsOptions))
server.use(watchlistRoutes)


// server.use(session)
// server.use(authRoutes)

server.use('/api/*', (req, res, next) => {
    if (req.method.toLowerCase() != 'get' && !req.session.uid) {
        res.status(400).send({ error: "Please Login to Continue" })
    }
    next()
})

server.use('*', (error, req, res, next) => {
    res.status(400).send(error)
})

server.get('*', (req, res, next) => {
    res.status(404).send(`
    <img src="https://media2.giphy.com/media/VwoJkTfZAUBSU/giphy.gif">`)
})

server.listen(port, () => {
    console.log("server running on: ", port)
})