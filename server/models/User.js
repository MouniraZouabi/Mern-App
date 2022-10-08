const mongoose = require("mongoose");
//define a mongoose Schema
const userSchema = new mongoose.Schema({

  FullName: { type: String,
    required: true,},

  Email: {
     type: String,
     required: true,
     },

  Password:{
    type: String,
    required: true,
   },

  Adr:{
     type: String,
  },

  Phone : Number ,

  Role :{
    type: String,
    required:true
   },
 
  ImgUrl :{
     type: String
    },

  });

//export the model 
module.exports = mongoose.model("user", userSchema);