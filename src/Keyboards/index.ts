import {
  KeyboardBuilder,
  InlineKeyboardBuilder,
  InlineKeyboard,
} from "puregram";
import product from "scenes/scenes/add_product";
import { TMethods } from "types";

export const keyboardErrCmd = new InlineKeyboardBuilder()
  .textButton({ text: "📕 Меню", payload: "⬅ Меню" })
  .textButton({ text: "🆘 Помощь", payload: "🆘 Помощь" });

export const keyboardBack = new KeyboardBuilder().textButton("⬅ Меню").resize();
export const keyboardCancellation = new InlineKeyboardBuilder().textButton({
  text: "🛑 Отмена",
  payload: "Отмена",
});

export const keyboardControl = new InlineKeyboardBuilder()
  .textButton({ text: "🛒 Товар", payload: "Товар" })
  .textButton({ text: "🧾 Акции", payload: "Акции" });

export const keyboardProductControl = new InlineKeyboardBuilder()
  .textButton({ text: "✔ Добавить товар", payload: "Добавить товар" })
  .textButton({ text: "❌ Удалить товар", payload: "Удалить товар" });

export const keyboardStockControl = new InlineKeyboardBuilder()
  .textButton({ text: "✔ Добавить акцию", payload: "Добавить акцию" })
  .textButton({ text: "❌ Удалить акцию", payload: "Удалить акцию" });

export const keyboardDellProductControl = new InlineKeyboardBuilder()
  .textButton({ text: "❌ Удалить товар", payload: "Удалить товар" })
  .textButton({ text: "🛑 Отмена", payload: "Отмена" });

export const keyboardProductAddControl = new InlineKeyboardBuilder()
  .textButton({ text: "⬅ Сначала", payload: "Назад" })
  .row()
  .textButton({ text: "✔ Добавить", payload: "Добавить" })
  .textButton({ text: "❌ Отмена", payload: "Отмена" });

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

  return InlineKeyboard.keyboard(buttons);
};

export const generateKeyboardBuy = (
  type: "product" | "stock",
  id: number
) =>
  InlineKeyboard.keyboard([
    InlineKeyboard.textButton({
      text: "🛒 Купить",
      payload: `type:${type}/id:${id}}`,
    }),
    InlineKeyboard.textButton({
      text: "⬅ Вернуться",
      payload: `type:BACK/id:${id}}`,
    }),
  ]);

export const keyboardMenu = new KeyboardBuilder()
  .textButton("📃 Товары")
  .textButton("🈹 Акции")
  .row()
  .textButton("🚚 Доставка")
  .textButton("📦 Опт")
  .row()
  .textButton("🆘 Помощь")
  .resize();

export const keyboardMenuAdmin = new KeyboardBuilder()
  .textButton("📃 Товары")
  .textButton("🈹 Акции")
  .row()
  .textButton("🚚 Доставка")
  .textButton("📦 Опт")
  .row()
  .textButton("🆘 Помощь")
  .row()
  .textButton("🏚 Панель управления")
  .resize();

export const keyboardHelp = new KeyboardBuilder()
  .textButton("⬅ Меню")
  .textButton("📞 Прямая связь")
  .resize();
