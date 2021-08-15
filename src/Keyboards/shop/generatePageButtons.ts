import { InlineKeyboard } from "puregram";
import { TMethods } from "types";

const TEXT_BACKPAGE = "⬅ Вернуться";
const getPayloadBackPage = `type:product/back:category`;

export const generateKeyboardProducts = (
  products: TMethods["SAVE_PRODUCT"][],
  type: "category" | "brand" | "name"
) => {
  const buttons = [];

  for (let product of products) {
    buttons.push(
      InlineKeyboard.textButton({
        text: product[type],
        payload:
          type === "name"
            ? `type:product/id:${product["id"]}`
            : `type:product/${type}:${product[type]}`,
      })
    );
  }

  if (type !== "category")
    buttons.push(
      InlineKeyboard.textButton({
        text: TEXT_BACKPAGE,
        payload: getPayloadBackPage,
      })
    );

  return InlineKeyboard.keyboard(buttons);
};

export const generateKeyboardStocks = (stocks: TMethods["SAVE_STOCK"][]) => {
  const type = "name";
  const buttons = [];

  for (let stock of stocks) {
    buttons.push(
      InlineKeyboard.textButton({
        text: stock[type],
        payload: `type:stock/id:${stock["id"]}`,
      })
    );
  }

  return InlineKeyboard.keyboard(buttons);
};

export const generateKeyboardBuy = (type: "product" | "stock", id: number) =>
  InlineKeyboard.keyboard([
    InlineKeyboard.textButton({
      text: "🛒 Купить",
      payload: `type:${type}/buy:${id}`,
    }),
    InlineKeyboard.textButton({
      text: TEXT_BACKPAGE,
      payload: getPayloadBackPage,
    }),
  ]);
