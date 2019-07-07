var path = require("path");
module.exports = function (app){
    //take user to home as long as the route is not 'survey'
    app.get("/:params",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"))
    });
    //route to survey.html
    app.get("/survey",function(req,res){
        res.sendFile(path.join(__dirname,"../public/survey.html"))
    });
}