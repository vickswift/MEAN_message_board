// Require the Express Module
var express = require('express');

var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './clients/static')));
app.set('views', path.join(__dirname, './clients/views'));
app.set('view engine', 'ejs');

//Import db
require("./server/config/mongoose_setup.js");
//pass express app instance to be utilized by the routes
require("./server/config/routes.js")(app)
// Setting our Server to Listen on port
app.listen(port, function() {
    console.log("listening on port 8000");
})
