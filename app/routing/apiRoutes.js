//import data of friends here
var friends = require("../data/friends");
module.exports = function (app){
    //get matched friend data 
    app.get("/api/friends",function(req,res){
        res.json(friends)
    });
    //add new data to friends
    app.post("/api/friends",function(req,res){
        console.log(req.body);
        //req.body =={ name: 'nova',photo: '123',scores: [ '1', '2', '2', '2', '3' ] }
        console.log(friends);
        
        //find and give back a match
        var newFriend = req.body.scores;
        var minDiff = 81;//5*  (5-1)^2  +1
        var friendIndex = -1;
        for (let index = 0; index < friends.length; index++) {
           var temp = friends[index].scores;
           var diff = 0 ;
           //5-2 5-2  == 4-2 5-1      
           //3+3 = 2 + 4   3^2 +3^2 <2^2+4^2 
           //both avg and Standard Deviation have to be small
           for (let i = 0; i < temp.length; i++) {
               diff += Math.pow(Math.abs(parseInt(temp[i])-parseInt(newFriend[i])),2);
           }
           if (diff<minDiff) {
               minDiff = diff;
               friendIndex = index;
           }
        }
        res.json(friends[friendIndex]);

        //add to friends list
        friends.push(req.body);
        
    });
}