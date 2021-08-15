import { InlineKeyboardBuilder, KeyboardBuilder } from "puregram";

export const keyboardCancellation = new InlineKeyboardBuilder()
  .textButton({
    text: "🛑 Отмена",
    payload: "Отмена",
  });

export const keyboardBack = new KeyboardBuilder()
  .textButton("⬅ Меню")
  .resize();

export const keyboardBackPage = () =>
  new InlineKeyboardBuilder().textButton({
    text: "⬅ Вернуться",
    payload: `type:BACK`,
  });
