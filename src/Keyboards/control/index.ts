import { InlineKeyboard, InlineKeyboardBuilder } from "puregram";
import { TMethods } from "types";

export const keyboardControl = new InlineKeyboardBuilder()
  .textButton({ text: "🛒 Товар", payload: "Товар" })
  .textButton({ text: "🧾 Акции", payload: "Акции" })
  .row()
  .textButton({ text: "🧟‍♂️ Администрация", payload: "Админы" });

export const keyboardProductControl = new InlineKeyboardBuilder()
  .textButton({ text: "✔ Добавить товар", payload: "Добавить товар" })
  .textButton({ text: "❌ Удалить товар", payload: "Удалить товар" });

export const keyboardStockControl = new InlineKeyboardBuilder()
  .textButton({ text: "✔ Добавить акцию", payload: "Добавить акцию" })
  .textButton({ text: "❌ Удалить акцию", payload: "Удалить акцию" });

export const keyboardAdminsControl = new InlineKeyboardBuilder()
  .textButton({ text: "✔ Добавить администратора", payload: "Добавить админа" })
  .row()
  .textButton({ text: "❌ Удалить администратора", payload: "Удалить админа" });

export const keyboardDellProductControl = new InlineKeyboardBuilder()
  .textButton({ text: "❌ Удалить товар", payload: "Удалить товар" })
  .textButton({ text: "🛑 Отмена", payload: "Отмена" });

export const keyboardProductAddControl = new InlineKeyboardBuilder()
  .textButton({ text: "⬅ Сначала", payload: "Назад" })
  .row()
  .textButton({ text: "✔ Добавить", payload: "Добавить" })
  .textButton({ text: "❌ Отмена", payload: "Отмена" });

export const generateKeyboardDellAdmins = (
  admins: TMethods["SAVE_ADMINS"][]
) => {
  const buttons = [];
  const days = (time: number) => Math.floor((Date.now() - time) / (1000 * 60 * 60 * 24));

  for (let admin of admins) {
    buttons.push(
      InlineKeyboard.textButton({
        text: `ID: ${admin["id"]}, добавлен: ${days(admin.approve)} дней назад`,
        payload: `${admin["id"]}`,
      })
    );
  }

  buttons.push(
    InlineKeyboard.textButton({
      text: "⬅ Вернуться",
      payload: "Вернуться",
    })
  );

  return InlineKeyboard.keyboard(buttons);
};
