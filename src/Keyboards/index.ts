import { KeyboardBuilder, InlineKeyboardBuilder } from "puregram";
import { TProducts } from "types";

export const keyboardErrCmd = new InlineKeyboardBuilder()
  .textButton({ text: "📕 Меню", payload: "⬅ Меню" })
  .textButton({ text: "🆘 Помощь", payload: "🆘 Помощь" });

export const keyboardBack = new InlineKeyboardBuilder()
  .textButton({ text: "⬅ Меню", payload: "⬅ Меню" })


export const generateKeyboardProducts = (arr: TProducts[]) => {
  const testBtns = new InlineKeyboardBuilder();
  arr.map((item) =>
    testBtns.textButton({ text: item.text, payload: `📃 Товары ${item.id}` }).row()
  );
  return testBtns;
};

export const keyboardMenu = new KeyboardBuilder()
  .textButton("📃 Товары")
  .textButton("🈹 Акции")
  .row()
  .textButton("🚚 Доставка")
  .textButton("📦 Опт")
  .row()
  .textButton("🆘 Помощь")
  .resize();

export const keyboardHelp = new KeyboardBuilder()
  .textButton("⬅ Меню")
  .textButton("📞 Прямая связь")
  .resize();
