import mongoose from "mongoose";
import shortid from "shortid";
const UserSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: false,
  },
});

export const User = mongoose.model("User", UserSchema);