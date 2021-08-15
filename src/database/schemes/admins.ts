import mongoose from "mongoose";

const SaveUser = new mongoose.Schema(
  {
    id: Number,
    approve: {
      type: Number,
      default: Date.now()
    },
  },
  {
    collection: "admins",
  }
);

export default mongoose.model("admins", SaveUser);
