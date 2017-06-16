var express = require("express"),
  xAdmin = require('express-admin');
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// Requiring our models for syncing
var db = require("./models");

// var PORT = process.env.PORT;

var app = express();

// Set Handlebars.
var exphbs = require("express-handlebars");

var config = {
  dpath: './express-admin-config/',
  config: require('./express-admin-config/config.json'),
  settings: require('./express-admin-config/settings.json'),
  custom: require('./express-admin-config/custom.json'),
  users: require('./express-admin-config/users.json')
};

xAdmin.init(config, function(err, admin) {
  if (err) return console.log(err);
  // mount express-admin before any other middlewares
  app.use('/admin', admin);
  // site specific middlewares
  // Serve static content for the app from the "public" directory in the application directory.
  app.use(express.static(process.cwd() + "/public"));
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  // uncomment when handlebars are made ----
  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  // Import routes and give the server access to them.
  var routes = require("./controllers/drone_controller.js");
  // site routes
  app.use("/", routes);

  // site server
  db.sequelize.sync({}).then(function() {
    app.listen(process.env.PORT || 3000, function(){
      console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    });
  });
});
