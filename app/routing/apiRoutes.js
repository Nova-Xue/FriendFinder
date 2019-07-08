//import data of friends here
var friends = require("../data/friends");
module.exports = function (app){
    //get matched friend data 
    app.get("/api/friends",function(req,res){
        //use Standard Deviation to match friends
        res.end("api-friend");
    });
    //add new data to friends
    app.post("/api/friends",function(req,res){
        console.log("post-friend");
        
    });
}