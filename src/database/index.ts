import mongoose from "mongoose";
import { product, stock } from "./schemes";
import { TParams, TTypes } from "types";
import { DATABASE_LINK } from "config";

mongoose.connect(DATABASE_LINK, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise;

const database: TParams = async (type: TTypes, data) => {
  const getProduct = await product.find();
  const getStock = await stock.find();

  switch (type) {
    case "GET_PRODUCT":
      if (getProduct) return getProduct;
      return "ERR_GET_PRODUCT";
    case "GET_STOCK":
      if (getStock) return getStock;
      return "ERR_GET_STOCK";
    // case "GET":
    //   if (getUser) return getUser._doc;
    //   const dataUser = await new SavedUser(user).save();
    //   return dataUser._doc;
    default:
      return console.log("database: type not found");
  }
};
export default database;
