const mongoose = require("mongoose");
//define a mongoose Schema
const userSchema = new mongoose.Schema({

  Title: { type: String,
    required: true,},

  Date: {
     type: Date ,
     required: true,
     },

  Location:{
    type: String,
    required: true,
   },

  Desc:{
     type: String,
  },

  Price : Number ,

 
  ImgUrl :{
     type: String
    },

  });

//export the model 
module.exports = mongoose.model("user", userSchema);