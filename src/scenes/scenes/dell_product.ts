import { SceneContext, StepScene } from "@puregram/scenes";
import { keyboardDellProductControl } from "Keyboards";
import database from "database";
import { TMethods } from "types";

const product = new StepScene("dell_product", [
  async (context) => {
    // step ID
    if (
      context.scene.step.firstTime ||
      !context.hasText ||
      !Number(context.text)
    ) {
      if (!context.message)
        return context.send(
          "Укажите ID товара. ( Только цифры, ID находится в описании товара )"
        );

      context.message?.deleteMessage();
      return context.message?.send(
        "Укажите ID товара. ( Только цифры, ID находится в описании товара )"
      );
    }
    const data = await database("GET_PRODUCT", undefined);
    const product: TMethods["SAVE_PRODUCT"] = await data.find(
      (product: TMethods["SAVE_PRODUCT"]) => product.id === Number(context.text)
    );

    if (!product)
      return context.send("Такого товара не существует, проверьте ID товара!");

    context.scene.state.product = product;
    return context.scene.step.next();
  },
  async (context) => {
    const { product } = context.scene.state;

    if (context.scene.step.firstTime) {
      return context.sendPhoto(product.photo, {
        caption: `Полное название: \n${product.brand} ${product.name}\nВы уверены, что хотите удалить товар?`,
        reply_markup: keyboardDellProductControl,
      });
    }

    if (context?.queryPayload === "Назад") return context.scene.step.go(0);
    context.message.deleteMessage();
    if (context?.queryPayload === "Удалить товар") {
      await database("DELETE_PRODUCT", { id: product.id })
      await context.message.send("Вы успешно удалили товар!");
    }
    if (context?.queryPayload === "Отмена")
      await context.message.send("Вы отменили удаление товара!");
    return context.scene.step.next();
  },
]);

export default product;
