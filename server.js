// "database"
var friends = require("./app/data/friends");

// server setup
var express = require("express");

var server = express();
var PORT = process.env.PORT || 8080;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// get routing function
require("./app/routing/apiRoutes")(server,friends);
require("./app/routing/htmlRoutes")(server);

// start the server
server.listen(PORT,function(){
    console.log("server is runing\n----------------------\n");
});