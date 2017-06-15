var express = require("express");
var router = express.Router()
var drones = require("../models/drones.js");

var db = require("../models");

router.get("/", function(req, res) {
  res.render("title");
});

router.get("/quiz", function(req, res) {
  res.render("quiz");
});

router.get("/about", function(req, res) {
  db.Content.findOne({
    where: {
      id: "1"
    }
  }).then(function(data) {
    var hbsObject = {
      content: data
    };
    res.render("about", hbsObject);
    console.log(hbsObject.content.header);
    console.log(hbsObject.content.text);
  });
});

router.post("/results", function(req, res) {
  //  console.log(req.body.price, req.body.camera, req.body.flight)
  if (req.body.price == 1) {
    var priceRange = [0, 100];
  } else if (req.body.price == 2) {
    var priceRange = [100, 500];
  } else {
    var priceRange = [500, 5000];
  }

  var seeing = req.body.camera;
  var iFlight = req.body.flight;

  db.Drones.findAll({
    where: {
      //           id: [1, 16]
      price: {
        $between: priceRange
      },
      $and: {
        camera: seeing
      },
      $and: {
        intelligent_flight: iFlight
      }
    }
  }).then(function(dbDrones) {
    var convert = {
      drones: dbDrones
    };
    console.log(dbDrones);
    res.render("results", convert);
  });
});

router.post("/single/:id", function(req, res) {
  db.Drones.findOne({
    where: {
      id: (req.params.id)
    },
    attributes: ["drone_name", "price", "camera", "weight", "picture_large"]
  }).then(function(theDrone) {

    //  db.Drones.findById(req.parmas.id)
    //    console.log(req.params.id);
    //    .then(function(theDrone) {

    var convert = {
      single: theDrone.dataValues
    };
    console.log(convert);
    res.render("single", convert);
  });
});

module.exports = router
