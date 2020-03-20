var express = require("express");
var router = express.Router();
let Food = require("../models/food_model.js");

// Insert data
router.post("/food/", function(request, response) {
    console.log(request.body); // ปริ้น request.body มาดู
  
    let food = new Food(); // กำหนด food ให้เหมือน Schema รอบที่แล้ว
    console.log(food);
    food.name = request.body.foodName; 
  
    console.log(parseFloat(request.body.calory)); // validate data
    if (isNaN(parseFloat(request.body.calory))) // check number
      response.status(500).send({ message: "calory is not a number" });
    else {
      food.calory = request.body.calory; 
      food.save(function(err, mgResponse) {
        if (err) response.status(500).send({ message: err }); 
        else {
          console.log("SAVE COMPLETE");
          // console.log(response);
          response.send(mgResponse);
        }
      });
    }
  });

  router.get("/food/", function(request, response) {
    console.log("REQUEST GET!!");
    console.log(request.params.id);
    let data = null;
    Food.find(function(err, mgResponse) {
      response.send(mgResponse);
    });
  });
  
  router.get("/food/:id", function(request, response) {
  console.log("REQUEST GET!!");
  console.log(request.params.id);
  let data = null;
  findFoodById(request.params.id, function(err, mgResponse) {
    if (mgResponse == undefined)
      response
        .status(404)
        .send({ message: 'id ${request.params.id} not found'});
    else response.send(mgResponse);
  });
});

router.delete("/food/:id", function(request, response) {
  console.log(request.params.id);
  let data = null;
  deleteFoodById(request.params.id, function(err, mgResponse) {
    if (mgResponse == undefined)
      response
        .status(404)
        .send({ message: 'id ${request.params.id} not found '});
    else response.send(mgResponse);
  });
});

module.exports = router;

function findFoodById(id, callback) {
  Food.findById(id, function(err, mgResponse) {
    console.log("GET COMPLETE");
    console.log(mgResponse);
    callback(err, mgResponse);

    // console.log(mgResponse[0].name);
  });
}

function deleteFoodById(id, callback) {
  Food.remove({ _id: id }, function(err, mgResponse) {
    console.log(mgResponse);
    callback(err, mgResponse);
  });
}