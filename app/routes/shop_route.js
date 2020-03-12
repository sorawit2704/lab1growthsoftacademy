var express = require("express");
var router = express.Router();
let Shop = require("../models/shop_model.js");

// Insert data
router.post("/shop/", function(request, response) {
    console.log(request.body); // ปริ้น request.body มาดู
  
    let shop = new Shop(); // กำหนด food ให้เหมือน Schema รอบที่แล้ว
    console.log(shop);
    shop.shopname = request.body.shopname; 
  
    shop.address = request.body.address; 
    // shop.save(function(err, mgResponse) {
    //   if (err) response.status(500).send({ message: err }); 
    //   else {
    //     //console.log("SAVE COMPLETE");
    //     console.log(response);
    //     response.send(mgResponse);
    //   }
    // });
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