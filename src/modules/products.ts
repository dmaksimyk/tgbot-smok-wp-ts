import { MessageContext } from "puregram";
import { TMethods } from "types";
import { PRODUCT_CAPTION, PRODUCT_CAPTION_NONE } from "config";
import { generateKeyboardProducts, keyboardBack } from "Keyboards";
import database from "database";
import { FilterUnique } from "./CustomFunctions";

const Products = (context: MessageContext) => database("GET_PRODUCT", undefined).then(
    (list: TMethods["SAVE_PRODUCT"][] | undefined) => {
      if (!list || list.length < 1)
        return context.send(PRODUCT_CAPTION_NONE, {
          reply_markup: keyboardBack,
        });

      const arr = FilterUnique(list, "category")

      context.send(PRODUCT_CAPTION, {
        reply_markup: generateKeyboardProducts(arr, "category"),
      });
      return;
    }
  );

export default Products;
