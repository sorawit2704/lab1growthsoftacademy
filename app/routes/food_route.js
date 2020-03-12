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

  module.exports = router;