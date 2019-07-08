var path = require("path");
module.exports = function (app){
    //take user to home as long as the route is not 'survey'
    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
    });
    //route to survey.html
    app.get("/:param",function(req,res){
        if (req.params.param == "survey") {
            res.sendFile(path.join(__dirname,"../public/survey.html"));
        }else{
            res.sendFile(path.join(__dirname,"../public/home.html"));
        }
        
    });
}