const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    _id: {
      type: String,
    },
    tenant: {
      type: String,
    },
    client_id: {
      type: String,
    },
    connection: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: { type: String, required: true },
    transaction: {
      type: Object,
    },
    request_language: {
      type: String,
    },
    email_verified: { type: Boolean },
    saved_search_sites: { type: Array },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
