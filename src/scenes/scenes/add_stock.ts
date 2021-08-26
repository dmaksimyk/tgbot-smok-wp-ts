import { StepScene } from "@puregram/scenes";
import { keyboardProductAddControl } from "Keyboards";
import database from "database";
import { TMethods } from "types";
import { sendMessage } from "modules/Messages";

const add_stock = new StepScene("add_stock", [
  async (context) => {
    // название
    if (context.scene.step.firstTime || !context.hasText) {
      await context.message.deleteMessage();
      return context.message?.send(
        "Укажите название акции. (Пример: СКИДКА 10%, АКЦИЯ 3 + 1 и т.д.)"
      );
    }

    if (context.message?.text && context.message?.text?.length >= 20) 
      return sendMessage(context, "До 20 символов, повторите попытку, укажите название акции.");

    if (context?.text && context.text?.length >= 20) 
      return sendMessage(context, "До 20 символов, повторите попытку, укажите название акции.");

    const stock: TMethods["SAVE_STOCK"][] | undefined = await database("GET_STOCK", undefined);
    if (stock) {
      const filter = stock.filter((data) => data.name === (context.text as string).toLocaleUpperCase())
      if (filter.length >= 1) {
        sendMessage(context, "Акция с таким названием уже существует, повторите попытку!");
        return context.scene.leave();
      }
    }

    context.scene.state.name = (context.text as string).toLocaleUpperCase();
    return context.scene.step.next();
  },
  (context) => {
    // описание
    if (context.scene.step.firstTime || !context.hasText) {
      return context.send(
        "Укажите текст акции. \n(Пример: Скидка всем 70% при покупке от 1000 рублей, и т.д.)"
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
    if (context?.queryPayload === "Добавить") {
      await database("SAVE_STOCK", {
        id: Date.now(),
        name: name,
        text: text,
      });
      await context.message.deleteMessage();
      await context.message.send("Вы добавили акцию!");
      return context.scene.step.next();
    }
    if (context?.queryPayload === "Отмена") {
      await context.message.deleteMessage();
      await context.message.send("Вы отменили добавление акции!");
      return context.scene.step.next();
    }
  },
]);

export default add_stock;
