const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var app = express();
var port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(process.env.PORT || 4000, function() {
    console.log("Listening on port " + port);
})