import { StepScene } from "@puregram/scenes";
import { keyboardProductAddControl } from "Keyboards";
import database from "database";

const product = new StepScene("add_stock", [
  async (context) => {
    // название
    if (context.scene.step.firstTime || !context.hasText) {
      context.message.deleteMessage();
      return context.message?.send(
        "Укажите название акции. (Пример: СКИДКА 10%, АКЦИЯ 3 + 1 и т.д.)"
      );
    }

    context.scene.state.name = (context.text as string).toLocaleUpperCase();
    return context.scene.step.next();
  },
  (context) => {
    // описание
    if (context.scene.step.firstTime || !context.hasText) {
      return context.send(
        "Текст акции. \n(Пример: Скидка всем 70% при покупке от 1000 рублей, и т.д.)"
      );
    }

    context.scene.state.text = context.text;
    return context.scene.step.next();
  },
  async (context) => {
    const { name, text } = context.scene.state;

    if (context.scene.step.firstTime) {
      return context.send(
        `Проверка данных:\n\nНазвание: ${name}\nОписание: ${text}`,
        {
          reply_markup: keyboardProductAddControl,
        }
      );
    }

    if (context?.queryPayload === "Назад") return context.scene.step.go(0);
    context.message.deleteMessage();
    if (context?.queryPayload === "Добавить") {
      await database("SAVE_STOCK", {
        id: Date.now(),
        name: name,
        text: text,
      });
      await context.message.send("Вы добавили акцию!");
    }
    if (context?.queryPayload === "Отмена")
      await context.message.send("Вы отменили добавление акции!");
    return context.scene.step.next();
  },
]);

export default product;
