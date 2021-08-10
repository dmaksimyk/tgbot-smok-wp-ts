import mongoose from "mongoose";

const SaveUser = new mongoose.Schema(
  {
    id: Number,
    name: String,
    text: String,
    photo: String,
    count: Number,
  },
  {
    collection: "product",
  }
);

export default mongoose.model("product", SaveUser);
