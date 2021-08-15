import database from "database";
import { CallbackQueryContext, MessageContext } from "puregram";
import { TGeneratePage, TMethods } from "types";
import { PRODUCT_CAPTION, PRODUCT_CAPTION_NONE, SYMBOL_RUB } from "config";
import { generateKeyboardBuy, generateKeyboardProducts, keyboardBack } from "Keyboards";
import { FilterUnique } from "./CustomFunctions";
import { anySendOrEditMessage, deleteMessage, editMessage, sendMessage, sendPhoto } from "./Messages";

const generatePages: TGeneratePage = async (
  context: CallbackQueryContext | MessageContext,
  typePage: "products" | "start_stocks" | "start_products" | "product_page" | "stock_page",
  text: string,
  id?,
  prev?,
  type?
) => {
  const typedb: "GET_PRODUCT" | "GET_STOCK" = (
    typePage === "products" || 
    typePage === "start_products" ||
    typePage === "product_page"
  ) ? 
    "GET_PRODUCT" : 
    "GET_STOCK"; 
  const data = await database(typedb, undefined);

  if (!data) 
    return console.log("generatePage: database not found data");
  if (data.length < 1) 
    return anySendOrEditMessage(context, PRODUCT_CAPTION_NONE, keyboardBack)

  switch (typePage) {
    case "product_page":
      if (id) {
        const product_item = data?.find((item: TMethods["SAVE_PRODUCT"]) => item.id === id)
        deleteMessage(context);
        sendPhoto(context, product_item.photo, `${
          (context as any).isAdmin && `🆔 <b>ID Товара:</b> ${product_item.id}\n\n`
          }🛍 <b>Название:</b> ${product_item.brand
          } ${product_item.name}\n📃 <b>Описание:</b> ${product_item.text
          }\n\n💰 <b>Стоимость:</b> ${product_item.price} ${SYMBOL_RUB}`, 
          generateKeyboardBuy("product", product_item.id))
      } else console.log("generatePages-product_page: send me id!")
      return;
    case "start_stocks":
      const startPageStocksButtons = FilterUnique(data, "name");
      return sendMessage(context, text, generateKeyboardProducts(startPageStocksButtons, "name"))
    case "start_products":
      const startProductsArray = FilterUnique(data, "category")
      if ((context as CallbackQueryContext).message?.attachments) {
        (context as CallbackQueryContext).message?.deleteMessage();
        return sendMessage(context, PRODUCT_CAPTION, generateKeyboardProducts(startProductsArray, "category"))
      } else {
        return anySendOrEditMessage(context, PRODUCT_CAPTION, generateKeyboardProducts(startProductsArray, "category"))
      }
    case "products":
      if (prev && type) {
        const filterProduct = data.filter((item: TMethods["SAVE_PRODUCT"]) => item[prev.type] === prev.name);
        const buttonsProduct = FilterUnique(filterProduct, type);
        return editMessage(context, text, generateKeyboardProducts(buttonsProduct, type))
      }
      return;
    case "stock_page":
      return;
    default:
      return console.log("generatePages: not found typePage")
  }
}

export default generatePages;
