import { KeyboardBuilder, InlineKeyboardBuilder } from "puregram";
import { TProducts } from "types";

export const keyboardErrCmd = new InlineKeyboardBuilder()
  .textButton({ text: "📕 Меню", payload: "⬅ Меню" })
  .textButton({ text: "🆘 Помощь", payload: "🆘 Помощь" });

export const keyboardBack = new InlineKeyboardBuilder().textButton({
  text: "⬅ Меню",
  payload: "⬅ Меню",
});

export const keyboardControl = new InlineKeyboardBuilder()
  .textButton({ text: "🛒 Товар", payload: "Товар" })
  .textButton({ text: "🧾 Акции", payload: "Акции" });

export const keyboardProductControl = new InlineKeyboardBuilder()
  .textButton({ text: "✔ Добавить товар", payload: "Добавить товар" })
  .textButton({ text: "❌ Удалить товар", payload: "Удалить товар" });

export const generateKeyboardProducts = (arr: TProducts[]) => {
  const testBtns = new InlineKeyboardBuilder();
  arr.map((item) =>
    testBtns
      .textButton({ text: item.text, payload: `📃 Товары ${item.id}` })
      .row()
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
