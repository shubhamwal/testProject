import mongoose from "mongoose";
import shortid from "shortid";
const HotelSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: false,
  },
});

export const Hotel = mongoose.model("Hotel", HotelSchema);