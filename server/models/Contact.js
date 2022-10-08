const mongoose = require("mongoose");

let contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  phone: {
    type: String,
  },
  
});

module.exports = Contact = mongoose.model("contact", contactSchema);