import { InlineKeyboardBuilder } from "puregram";

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
