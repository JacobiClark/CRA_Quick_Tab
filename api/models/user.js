const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: { type: String, required: true },
    email_verified: { type: Boolean },
    saved_search_sites: { type: Array },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
