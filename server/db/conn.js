const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const client = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));


module.exports = client;
