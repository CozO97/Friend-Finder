const friendData = require("../data/friends.js");
const friendMatch = require("../data/match.js");

module.exports = function(app){
    console.log("Loaded API routes!")
    let friendImage = [];
    let scoreInt = [];

    app.get("/api/friends", function(req, res){
        res.json(friendData)
    })
    app.get("/api/github", function(req, res){
        res.json("https://github.com/CozO97/Friend-Finder");
    })


    //POSTS
    app.post("/api/friends", function(req, res){
        let addFriend = req.body;

        let addedName = [];

        for(let i = 0; i < addFriend.scores.length; i++) {
            addFriend.scores[i] = parseInt(addFriend.scores[i])
            scoreInt = addFriend.scores[i];
        }
        friendData.push(addFriend);
        res.json(addFriend);
        console.log(addFriend)

    });
        

};//module export end