import { CallbackQueryContext } from "puregram";
import { TMethods } from "types";
import database from "database";
import { ADMIN_ID, SYMBOL_RUB } from "config";
import { generateKeyboardBuy } from "Keyboards";

const ProductPage = (context: CallbackQueryContext, id: number) =>
  database("GET_PRODUCT", undefined).then(
    async (list: TMethods["SAVE_PRODUCT"][] | undefined) => {
      const item = list?.find((item) => item.id === id);
      if (item) {
        await context.message?.deleteMessage();
        await context.message?.sendPhoto(item.photo, {
          parse_mode: "HTML",
          caption: `${
            context.senderId === ADMIN_ID && `🆔 <b>ID Товара:</b> ${item.id}\n\n`
          }🛍 <b>Название:</b> ${item.brand} ${item.name}\n📃 <b>Описание:</b> ${item.text}\n\n💰 <b>Стоимость:</b> ${item.price} ${SYMBOL_RUB}`,
          reply_markup: generateKeyboardBuy("product", item.id),
        });
      }
    }
  );

export default ProductPage;
