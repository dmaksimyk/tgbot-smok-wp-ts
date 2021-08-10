import mongoose from "mongoose";

const SaveUser = new mongoose.Schema(
  {
    id: Number,
    name: String,
  },
  {
    collection: "stock",
  }
);

export default mongoose.model("stock", SaveUser);
