import { InlineKeyboardBuilder, KeyboardBuilder } from "puregram";

export const keyboardCancellation = new InlineKeyboardBuilder()
  .textButton({
    text: "🛑 Отмена",
    payload: "Отмена",
  });

export const keyboardBack = new KeyboardBuilder()
  .textButton("⬅ Меню")
  .resize();

export const keyboardBackPage = (page?: "product" | "stock") =>
  new InlineKeyboardBuilder().textButton({
    text: "⬅ Вернуться",
    payload: page ? `type:${page}/back:category` : "Вернуться",
  });
