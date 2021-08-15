import mongoose from "mongoose";
import { product, stock, admins } from "./schemes";
import { TParams, TTypes } from "types";
import { DATABASE_LINK } from "config";

mongoose.connect(DATABASE_LINK, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.Promise = global.Promise;
const text_add = "added successfully";
const text_delete = "is deleted successfully";

const database: TParams = async (type: TTypes, data) => {
  switch (type) {
    case "GET_PRODUCT":
      let getProduct = await product.find();
      return getProduct ? getProduct : console.log("ERR_GET_PRODUCT");
    case "GET_STOCK":
      let getStock = await stock.find();
      return getStock ? getStock : console.log("ERR_GET_STOCK");
    case "GET_ADMINS":
      const getAdmins = await admins.findOne(data);
      return getAdmins ? true : false;
    case "SAVE_PRODUCT":
      await new product(data).save();
      return console.log(`product ${text_add}`);
    case "SAVE_STOCK":
      await new stock(data).save();
      return console.log(`stock ${text_add}`);
    case "SAVE_ADMINS":
      await new stock(data).save();
      return console.log(`administator ${text_add}`);
    case "DELETE_PRODUCT":
      await product.deleteOne(data);
      return console.log(`product ${text_delete}`);
    case "DELETE_STOCK":
      await stock.deleteOne(data);
      return console.log(`stock ${text_delete}`);
    case "DELETE_ADMINS":
      await admins.deleteOne(data);
      return console.log(`administrator ${text_delete}`);
    default:
      return console.log("database: type not found");
  }
};

export default database;
