import { StepScene } from "@puregram/scenes";
import { keyboardProductAddControl } from "Keyboards";
import { bot, SYMBOL_RUB, TOKEN } from "config";
import axios from "axios";
import sharp from "sharp";
import database from "database";

const product = new StepScene("add_product", [
  (context) => {
    // категория
    if (context.scene.step.firstTime || !context.hasText) {
      context.message.deleteMessage();
      return context.message.send(
        "Укажите категорию товара. (Пример: Наушники, Одноразовые POD-системы, и т.д.)"
      );
    }

    context.scene.state.category = (context.text as string).toLocaleUpperCase();
    return context.scene.step.next();
  },
  (context) => {
    // бренд
    if (context.scene.step.firstTime || !context.hasText) {
      return context.send("Укажите бренд товара. (Пример: APPLE, HQD и т.д.)");
    }

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
      return context.sendPhoto(image, {
        parse_mode: "MarkdownV2",
        caption: `*Проверка данных:*\n\n_Категория:_ *${category}*\n_Бренд:_ *${brand}*\n_Название:_ *${nameProduct}*\n_Описание:_ *${textProduct}*\n_Цена за штуку:_ *${price} ${SYMBOL_RUB}*`,
        reply_markup: keyboardProductAddControl,
      });
    }

    if (context?.queryPayload === "Назад") return context.scene.step.go(0);
    context.message.deleteMessage();
    if (context?.queryPayload === "Добавить") {
      await database("SAVE_PRODUCT", {
        id: Date.now(),
        category: category as string,
        brand: brand,
        name: nameProduct,
        text: textProduct,
        price: Number(price),
        photo: image,
      })
      await context.message.send("Вы добавили товар!");
    }
    if (context?.queryPayload === "Отмена") await context.message.send("Вы отменили добавление товара!");
    return context.scene.step.next();
  },
]);

export default product;
