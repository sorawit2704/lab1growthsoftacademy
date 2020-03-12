var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var typeObjectId = mongoose.Schema.Types.ObjectId;

var Shop_Schema = new Schema({
  shopname: { type: String, default: null },
  address: { type: String, default: null },
  tel: { type: Number, default: null }
});

module.exports = mongoose.model("Shop", Shop_Schema);

// {
//     "_id": "_id","positionName" : "positionName","dateTime_create" : "dateTime_create"
// }