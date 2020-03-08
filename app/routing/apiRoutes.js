var path  = require("path");
var match = require("../algorithm/match.js");

module.exports = function(server,friends){
    // get route to display a JSON of all possible friends
    server.get("/api/friends",function(req,res){
        res.json(friends);
    });


    // post route to add user into the "database"
    server.post("/api/friends",function(req,res){
        var person = req.body;
        var result = match(friends,person);
        var id = result[0];
        // console.log(result);
        if(id<0){
            // no match found, should not happen unless the friends list is empty
            res.status(200).send("no match found");
        }else{
            var temp  = friends[id];
            friends.push(req.body);
            res.status(200).send(temp);
            
        }
    });
}