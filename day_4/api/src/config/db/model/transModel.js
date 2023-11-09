const mongoose = require("mongoose");

const transSchema = mongoose.Schema(
  {
    // expense: {
    //   type: String,
    //   required: [true, "Enter your Expenses"],
    // },
    // income: {
    //   type: String,
    //   required: [true, "Enter your Income"],
    // },
    type: {
      type: String,
      required: [true, "Select the type"],
      enum: ["expense", "income"],
      trim: true,
    },
    amount: {
      type: Number,
      required: [true, "Enter your amount"],
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      require: [true, "please specify the user"],
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);
const Transaction = mongoose.model("Transactions", transSchema);
module.exports = Transaction;
