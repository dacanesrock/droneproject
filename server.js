var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var path = require("path");
// Requiring our models for syncing
var app = express();
var db = require("./models");

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname ,"public")));

// Override with POST having ?_method=DELETE
//app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname ,"views"));

// Import routes and give the server access to them.
var routes = require("./controllers/drones_controller.js");

app.use("/", routes);
app.use("/results", routes);
app.use("/single/:id", routes);

// Syncing our sequelize models and then starting our express app
//db.sequelize.sync({force: true}).then(function() {
db.sequelize.sync().then(function() {	
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});