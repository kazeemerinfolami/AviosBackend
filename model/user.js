const mongoose = require("mongoose");

// "size":"32",
// "color":"Orange",
// "quantity":"15",
// "images":["image1", "image2"],
// "price":"23000"

//schema
const user_Schema = new mongoose.Schema(
  {
    size: {
      type: String,
    },
    color: {
      type: String,
    },
    quantity: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("User", user_Schema);