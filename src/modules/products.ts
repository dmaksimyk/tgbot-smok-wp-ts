import { MessageContext } from "puregram";
import { TProducts } from "types";
import { PRODUCT_CAPTION, PRODUCT_CAPTION_NONE } from "config";
import { generateKeyboardProducts, keyboardBack } from "Keyboards";
import database from "database";

const Products = (context: MessageContext) => {
  database("GET_PRODUCT", undefined).then((list: TProducts[] | undefined) => {
    if (!list || list.length < 1)
      return context.send(PRODUCT_CAPTION_NONE, {
        reply_markup: keyboardBack,
      });
    else {
      context.send(PRODUCT_CAPTION, {
        reply_markup: generateKeyboardProducts(list),
      });
      return console.log(list);
    }
  });
};

export default Products;
