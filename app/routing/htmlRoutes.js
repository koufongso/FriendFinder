var path  = require("path");

module.exports = function(server){
    // route to survey page
    server.get("/survey",function(req,res){
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    });

    // default route: home page
    server.get("*",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
    })
}

