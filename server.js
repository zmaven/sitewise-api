// JSON Server module
const jsonServer = require("json-server");
const bodyParser = require('body-parser');
const server = jsonServer.create();
const router = jsonServer.router("./db.json");

// Make sure to use the default middleware
const middlewares = jsonServer.defaults();

server.use(bodyParser.json({limit: '100mb', extended: true}))
server.use(bodyParser.urlencoded({limit: '100mb', extended: true}))
server.use(middlewares);
// Add this before server.use(router)
server.use(
 // Add custom route here if needed
 jsonServer.rewriter({
  "/api/*": "/$1",
 })
);
server.use(router);
// Listen to port
server.listen(3000, () => {
 console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;