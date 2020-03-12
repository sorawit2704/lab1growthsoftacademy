var express = require("express");
var router = express.Router();
let shop = require("../models/shop_model.js");

// === do shop like food === //

// Insert data
router.post("/shop/", function(request, response) {
    console.log(request.body); // ปริ้น request.body มาดู
  
    let shop = new Shop(); // กำหนด food ให้เหมือน Schema รอบที่แล้ว
    console.log(shop);
    shop.name = request.body.shopName; 
  
    // console.log(parseFloat(request.body.address)); // validate data
    // if (isNaN(parseFloat(request.body.address))) // check number
    //   response.status(500).send({ message: "calory is not a number" });
    // else {
      shop.address = request.body.address; 
      shop.save(function(err, mgResponse) {
        if (err) response.status(500).send({ message: err }); 
        else {
          //console.log("SAVE COMPLETE");
          // console.log(response);
          response.send(mgResponse);
        }
      });
    //}
    console.log(parseInt(request.body.tel)); // validate data
    if (isNaN(parseInt(request.body.tel))) // check number
      response.status(500).send({ message: "tel is not a number" });
    else {
      shop.tel = request.body.tel;
      shop.save(function(err, mgResponse) {
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