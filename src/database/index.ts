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
  switch (type) {
    case "GET_PRODUCT":
      let getProduct = await product.find();
      if (getProduct) return getProduct;
      return "ERR_GET_PRODUCT";
    case "GET_STOCK":
      let getStock = await stock.find();
      if (getStock) return getStock;
      return "ERR_GET_STOCK";
    case "SAVE_PRODUCT":
      await new product(data).save();
      return console.log("new product saved");
    case "SAVE_STOCK":
      await new stock(data).save();
      return console.log("new stock saved");
    case "DELETE_PRODUCT":
      await product.deleteOne({ id: data?.id });
      return console.log("product delete");
    case "DELETE_STOCK":
      await stock.deleteOne({ id: data?.id });
      return console.log("stock delete");
    default:
      return console.log("database: type not found");
  }
};

export default database;
