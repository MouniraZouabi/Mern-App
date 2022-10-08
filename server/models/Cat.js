const mongoose = require("mongoose");
//define a mongoose Schema
let catSchema = new mongoose.Schema({

  CatName: { type: String,},
  Location: {type: String, },
  Condition:{type: String,},
  State:{ type: String, required :true ,},
  Reward :{type: String,},
  Desc :{type: String,},
  ImgUrl :{type: String},
  });

//export the model 
module.exports = Cat = mongoose.model("cat", catSchema);