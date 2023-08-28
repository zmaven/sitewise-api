const jsonServer = require('json-server')
const bodyParser = require('body-parser');
const router = jsonServer.router("./db.json");

const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(bodyParser.json({limit: '100mb', extended: true}))
server.use(bodyParser.urlencoded({limit: '100mb', extended: true}))
server.use(middlewares)

server.use((req, res, next) => {
    if (req.path !== '/')
        router.db.setState(clone(data))
    next()
})

server.use(router)
server.listen(process.env.PORT || 8000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
