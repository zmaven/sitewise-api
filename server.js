// JSON Server module
const jsonServer = require("json-server");
const path = require('path');
const fs = require("fs");
const os = require("os");

fs.copyFile("db.json", os.tmpdir() + "/db.json", function (err) {
  if (err) console.log(err);
  else console.log("copy file succeed to" + os.tmpdir());
});

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(os.tmpdir() + "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
// Add this before server.use(router)
server.use(
	// Add custom route here if needed
	jsonServer.rewriter({
		"/api/*": "/$1",
	})
);
server.use(router);
server.listen(3800, () => {
	console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
