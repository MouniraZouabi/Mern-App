const mongoose = require("mongoose");
//define a mongoose Schema
const vetoSchema = new mongoose.Schema({
    CabName: { type: String,
        required: true,},
    
  DocName: { type: String,
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
     required:true,
  },

  Phone : Number ,

  ImgUrl :{
     type: String
    },

  });

//export the model 
module.exports = mongoose.model("veto", userSchema);