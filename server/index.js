const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
var cors = require('cors');


// routes connect (crud)
app.use(cors());
app.use(express.json());
app.use("/api/cats",require("./routes/CatRoutes/catRoutes"));

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 6000;
mongoose
.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON PORT ${PORT}`);
});
