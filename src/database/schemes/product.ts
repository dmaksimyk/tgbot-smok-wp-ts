import mongoose from "mongoose";

const SaveUser = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: Date.now()
    },
    category: String,
    brand: String,
    name: String,
    text: String,
    price: Number,
    photo: String,
  },
  {
    collection: "product",
  }
);

export default mongoose.model("product", SaveUser);
