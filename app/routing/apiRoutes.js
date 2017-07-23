const friendData = require("../data/friends.js");
const friendMatch = require("../data/match.js");

module.exports = function(app){

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

        for(let i = 0;, i < addFriend.scores.length; i++) {
            addFriend.scores[i] = parseInt(addFriend.scores[i])
            scoreInt = addFriend.scores[i];
        }
        friendData.push(addFriend);
        res.json(addFriend);
        console.log(addFriend)

        const scoreMatch = friendMatch.map(matchMe => matchMe.scores)
        console.log(scoreMatch)

        //getting the scores
        const firstMatch = friendMatch[0].scores.reduce((a, b) => a + b, 0);
        console.log(firstMatch + " is your first matches score.")

        const secondMatch = friendMatch[1].scores.reduce((a, b) => a + b, 0);
        console.log(firstMatch + " is your second matches score.")

        const thirdMatch = friendMatch[2].scores.reduce((a, b) => a + b, 0);
        console.log(firstMatch + " is your third matches score.")

        const fourthMatch = friendMatch[3].scores.reduce((a, b) => a + b, 0);
        console.log(firstMatch + " is your fourth matches score.")

        const userTotal = friendData[0].scores.reduce((a, b) => a + b, 0);
        console.log(userTotal + "is the user total score")

        function matchFriend(friend, user) {
            const closeMatch = friend = user;
            console.log("Match Difference " + closeMatch)

            if (friend === user){
                return true
            }
            else if (closeMatch > 0 && closeMatch < 2){
                return true
            }
            else {
                return false
            }
        };
        console.log(matchFriend(firstMatch, userTotal));
        console.log(matchFriend(secondMatch, userTotal));
        console.log(matchFriend(thirdMatch, userTotal));
        console.log(matchFriend(fourthMatch, userTotal));

    });
}//module export end