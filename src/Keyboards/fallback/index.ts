import { InlineKeyboardBuilder } from "puregram";

export const keyboardErrCmd = new InlineKeyboardBuilder()
  .textButton({ text: "📕 Меню", payload: "⬅ Меню" })
  .textButton({ text: "🆘 Помощь", payload: "🆘 Помощь" });
