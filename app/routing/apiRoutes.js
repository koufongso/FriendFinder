var path  = require("path");

module.exports = function(server,friends){
    // get route to display a JSON of all possible friends
    server.get("/api/friends",function(req,res){
        res.json(friends);
    });


    // post route to add user into the "database"
    server.post("/api/friends",function(req,res){
        friends.push(req.body);
    });

}