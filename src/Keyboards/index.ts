import { KeyboardBuilder, InlineKeyboardBuilder } from "puregram";

export const keyboardMenu = new KeyboardBuilder()
  .textButton("📃 Товары")
  .textButton("🈹 Акции")
  .row()
  .textButton("🚚 Доставка")
  .textButton("📦 Опт")
  .row()
  .textButton("🆘 Помощь")
  .resize();

export const keyboardErrCmd = new InlineKeyboardBuilder()
  .textButton({ text: "📕 Меню", payload: "⬅ Меню" })
  .textButton({ text: "🆘 Помощь", payload: "🆘 Помощь" });

export const keyboardHelp = new KeyboardBuilder()
  .textButton("⬅ Меню")
  .textButton("📞 Прямая связь")
  .resize();
