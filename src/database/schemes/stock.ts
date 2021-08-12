import mongoose from "mongoose";

const SaveUser = new mongoose.Schema(
  {
    id: Number,
    name: String,
    text: String,
  },
  {
    collection: "stock",
  }
);

export default mongoose.model("stock", SaveUser);
