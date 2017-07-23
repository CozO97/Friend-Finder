const express = require("express");
const bodyParser = require("body-parser");

var app = express();
var port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));


require("./app/routing/apiRoutes.js"(app));
require("./app/routing/htmlRoutes.js"(app));


app.listen(port, function() {
    console.log("Listening on port " + port);
})