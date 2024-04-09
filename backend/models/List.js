const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
});

const List = mongoose.model("List", listSchema);

module.exports = List;
