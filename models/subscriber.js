const mongoose = require("mongoose");
const subscriberSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  country: { type: String },
});

module.exports = mongoose.model("Subscriber", subscriberSchema);
