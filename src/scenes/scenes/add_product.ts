import { StepScene } from "@puregram/scenes";
import { keyboardProductAddControl } from "Keyboards";

const product = new StepScene("add_product", [
  (context) => {
    // категория
    if (context.scene.step.firstTime || !context.hasText) {
      return context.message.editMessageText(
        "Укажите категорию товара. (Пример: Наушники, Одноразовые POD-системы, и т.д.)"
      );
    }

    context.scene.state.category = context.text;
    return context.scene.step.next();
  },
  (context) => {
    // бренд
    if (context.scene.step.firstTime || !context.hasText) {
      return context.send("Укажите бренд товара. (Пример: APPLE, HQD и т.д.)");
    }

    context.scene.state.brand = context.text;
    return context.scene.step.next();
  },
  (context) => {
    // название
    if (context.scene.step.firstTime || !context.hasText) {
      return context.send(
        "Укажите наименование товара. (Пример: APPLE AIRPODS, HQD - ВАНИЛЬ - 1600 ЗАТЯЖЕК и т.д.)"
      );
    }

    context.scene.state.nameProduct = context.text;
    return context.scene.step.next();
  },
  (context) => {
    // описание
    if (context.scene.step.firstTime || !context.hasText) {
      return context.send("Укажите описание товара.");
    } else {
      context.scene.state.textProduct = context.text;
      return context.scene.step.next();
    }
  },
  (context) => {
    // цена
    if (context.scene.step.firstTime || !context.hasText) {
      return context.send("Укажите цену товара. (Например: 1600, 2000 и т.д.)");
    }
    // проверка на число
    if (Number(context.text)) {
      context.scene.state.price = context.text;
      return context.scene.step.next();
    } else {
      return context.send("Укажите цену! (Например: 1600, 2000 и т.д.)");
    }
  },
  async (context) => {
    const { category, brand, nameProduct, textProduct, price } =
      context.scene.state;
    if (context.scene.step.firstTime)
      return context.send(
        `Проверка введённых данных:\nКатегория: ${category}\nБренд: ${brand}\nНазвание: ${nameProduct}\nОписание: ${textProduct}\nЦена за штуку: ${price}`,
        { reply_markup: keyboardProductAddControl }
      );

    if (context?.queryPayload === "Назад") return context.scene.step.go(0);
    if (context?.queryPayload === "Добавить") await context.message.editMessageText("Вы добавили товар!");
    if (context?.queryPayload === "Отмена") await context.message.editMessageText("Вы отменили добавление товара!");
    return context.scene.step.next();
  },
]);

export default product;
