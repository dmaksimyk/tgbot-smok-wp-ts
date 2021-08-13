import { StepScene } from "@puregram/scenes";
import { keyboardCancellation, keyboardDellProductControl } from "Keyboards";
import database from "database";
import { TMethods } from "types";

const product = new StepScene("dell_stock", [
  async (context) => {
    // step ID
    if (context?.queryPayload === "Отмена") {
      if (!context.message) {
        await context.editMessageText("Вы вышли!");
      } else {
        await context.message?.editMessageText("Вы вышли!");
      }

      return context.scene.leave();
    }

    if (
      context.scene.step.firstTime ||
      !context.hasText ||
      !Number(context.text)
    ) {
      if (!context.message)
        return context.send(
          "Укажите ID акции. ( Только цифры, ID находится в описании акции )",
          {
            reply_markup: keyboardCancellation,
          }
        );

      await context.message?.deleteMessage();
      return context.message?.send(
        "Укажите ID акции. ( Только цифры, ID находится в описании акции )",
        {
          reply_markup: keyboardCancellation,
        }
      );
    }

    const data = await database("GET_STOCK", undefined);
    const stock: TMethods["SAVE_STOCK"] = await data.find(
      (stock: TMethods["SAVE_STOCK"]) => stock.id === Number(context.text)
    );

    if (!stock)
      return context.send("Такой акции не существует, проверьте ID акции!", {
        reply_markup: keyboardCancellation,
      });

    context.scene.state.stock = stock;
    return context.scene.step.next();
  },
  async (context) => {
    const stock: TMethods["SAVE_STOCK"] = context.scene.state.stock;

    if (context.scene.step.firstTime) {
      return context.send(
        `Название акции: ${stock.name}\n\nВы уверены, что хотите удалить акцию?`,
        {
          reply_markup: keyboardDellProductControl,
        }
      );
    }

    if (context?.queryPayload === "Назад") return context.scene.step.go(0);
    if (context?.queryPayload === "Удалить товар") {
      await database("DELETE_STOCK", { id: stock.id });
      await context.message.deleteMessage();
      await context.message.send("Вы успешно удалили акцию!");
      return context.scene.step.next();
    }
    if (context?.queryPayload === "Отмена") {
      await context.message.deleteMessage();
      await context.message.send("Вы отменили удаление акции!");
      return context.scene.step.next();
    }
  },
]);

export default product;
