const mongoose = require("mongoose");
const validator = require("validator");

const orderSchema = new mongoose.Schema(
  {
    // expect: orderId can count automatically
    orderId: {
      required: true,
      type: String,
      trim: true,
    },
    // connect User collection
    owner: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    addressPoint: {
      required: true,
      type: String,
      trim: true,
    },
    timeTakeOrder: {
      required: true,
      type: String,
    },
    status: {
      required: true,
      type: String,
      enum: ["Pick up", "Delivery", "Eat In"],
    },
    listProducts: [
      {
        productName: {
          required: true,
          type: String,
        },
        extra: [
          {
            type: String,
            trim: true,
          },
        ],
        note: {
          type: String,
          trim: true,
        },
        quantity: {
          required: true,
          type: Number,
        },
        price: {
          required: true,
          type: Number,
        },
      },
    ],
    totalPrice: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
