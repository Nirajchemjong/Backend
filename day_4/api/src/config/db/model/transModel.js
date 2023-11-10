const mongoose = require("mongoose");

const transSchema = new mongoose.Schema(
  {
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
