const path = require("path");

module.exports = function(app){
    app.get("/:endpoint?", function(req, res){
        switch (req.params.endpoint) {
            case "/":
            case undefined;
                res.sendFile(path.join(__dirname, "/../public/home.html"));
                break;
            case "survey":
            res.sendFile(path.join(__dirname, "/../public/survey.html"));
            default:
            res.sendFile(path.join(__dirname, "/..public/404.html"));

        }
    })
}