import { StepScene } from "@puregram/scenes";
import { keyboardProductAddControl } from "Keyboards";
import { bot, SYMBOL_RUB, TOKEN } from "config";
import axios from "axios";
import sharp from "sharp";
import database from "database";
import { TMethods } from "types";
import { sendMessage } from "modules/Messages";

const add_product = new StepScene("add_product", [
  async (context) => {
    // категория
    if (context.scene.step.firstTime || !context.hasText) {
      await context.message.deleteMessage();
      return context.message.send(
        "Укажите категорию товара. (Пример: Наушники, Одноразовые POD-системы, и т.д.)"
      );
    }

    if (context.message?.text && context.message?.text?.length >= 18) 
      return sendMessage(context, "До 18 символов, повторите попытку, укажите категорию товара.");

    if (context?.text && context.text?.length >= 18) 
      return sendMessage(context, "До 18 символов, повторите попытку, укажите категорию товара.");

    context.scene.state.category = (context.text as string).toLocaleUpperCase();
    return context.scene.step.next();
  },
  async (context) => {
    // бренд
    if (context.scene.step.firstTime || !context.hasText) {
      return context.send("Укажите бренд товара. (Пример: APPLE, HQD и т.д.)");
    }

    if (context?.text && context.text?.length >= 18) 
      return sendMessage(context, "До 18 символов, повторите попытку, укажите бренд товара.");

    context.scene.state.brand = (context.text as string).toLocaleUpperCase();
    return context.scene.step.next();
  },
  (context) => {
    // название
    if (context.scene.step.firstTime || !context.hasText) {
      return context.send(
        "Укажите наименование товара. (Пример: AIRPODS, ВАНИЛЬ - 1600 ЗАТЯЖЕК и т.д.)"
      );
    }

    if (context?.text && context.text?.length >= 20) 
      return sendMessage(context, "До 20 символов, повторите попытку, укажите название товара.");

    context.scene.state.nameProduct = (
      context.text as string
    ).toLocaleUpperCase();
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
    if (
      context.scene.step.firstTime ||
      !context.hasText ||
      !Number(context.text)
    ) {
      return context.send("Укажите цену товара. (Например: 1600, 2000 и т.д.)");
    }
    // проверка на число
    context.scene.state.price = context.text;
    return context.scene.step.next();
  },
  async (context) => {
    // цена
    const attach: any = context.attachments[0];
    if (context.scene.step.firstTime || !attach?.bigSize) {
      return context.send("Отправьте фотографию товара.");
    }
    // проверка фото
    const file = await bot.callApi("getFile", {
      file_id: attach.bigSize.fileId,
    });
    const link = `https://api.telegram.org/file/bot${TOKEN}/${file.file_path}`;

    const input = (
      await axios({
        url: link,
        responseType: "arraybuffer",
      })
    ).data as Buffer;

    const output = await sharp(input).jpeg().toBuffer();

    context.scene.state.image = output;
    return context.scene.step.next();
  },
  async (context) => {
    const { category, brand, nameProduct, textProduct, price, image } =
      context.scene.state;
    if (context.scene.step.firstTime) {
      const checkProduct: TMethods["SAVE_PRODUCT"][] | undefined = await database("GET_PRODUCT", undefined);
      if (checkProduct) {
        const sortProduct = checkProduct.filter((data) => data.category === category && data.brand === brand && data.name === nameProduct);
        if (sortProduct.length >= 1) {
          sendMessage(context, "Такой товар уже существует, повторите попытку!");
          return context.scene.leave();
        }
      }

      return context.sendPhoto(image, {
        caption: `Проверка данных:\n\nКатегория: ${category}\nБренд: ${brand}\nНазвание: ${nameProduct}\nОписание: ${textProduct}\nЦена за штуку: ${price} ${SYMBOL_RUB}`,
        reply_markup: keyboardProductAddControl,
      });
    }

    if (context?.queryPayload === "Назад") return context.scene.step.go(0);
    if (context?.queryPayload === "Добавить") {
      await database("SAVE_PRODUCT", {
        id: Date.now(),
        category: category as string,
        brand: brand,
        name: nameProduct,
        text: textProduct,
        price: Number(price),
        photo: image,
      });
      await context.message.deleteMessage();
      await context.message.send("Вы добавили товар!");
      return context.scene.step.next();
    }
    if (context?.queryPayload === "Отмена") {
      await context.message.deleteMessage();
      await context.message.send("Вы отменили добавление товара!");
      return context.scene.step.next();
    }
  },
]);

export default add_product;
