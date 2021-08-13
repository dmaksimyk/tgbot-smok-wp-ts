import { CallbackQueryContext } from "puregram";
import { TMethods } from "types";
import { PRODUCT_CAPTION_NONE } from "config";
import { generateKeyboardProducts, keyboardBack } from "Keyboards";
import database from "database";
import { FilterUnique } from "./CustomFunctions";

const ProductsNavigation = (
  context: CallbackQueryContext,
  text: string,
  prev: { name: string; type: "category" | "brand" | "name" },
  type: "category" | "brand" | "name"
) =>
  database("GET_PRODUCT", undefined).then(
    async (list: TMethods["SAVE_PRODUCT"][] | undefined) => {
      if (!list || list.length < 1)
        return context.message?.editMessageText(PRODUCT_CAPTION_NONE, {
          reply_markup: keyboardBack,
        });

      const filteredArr = list.filter((item) => item[prev.type] === prev.name);
      const buttons = FilterUnique(filteredArr, type);

      context.message?.editMessageText(text, {
        reply_markup: generateKeyboardProducts(buttons, type),
      });
      return;
    }
  );

export default ProductsNavigation;
