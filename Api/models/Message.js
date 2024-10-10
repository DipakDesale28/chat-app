const { text } = require("express");
const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
  {
    recepient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    text: String,
  },
  { timestamp: true }
);

const MessageModel = mongoose.model("Message", MessageSchema);

module.exports = MessageModel;
