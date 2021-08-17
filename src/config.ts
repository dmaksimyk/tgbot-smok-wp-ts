import { Telegram } from "puregram";

export const ADMIN_ID: number = 770651836;
export const DEV_ID: number = 770651836;
export const DATABASE_LINK: string = "mongodb://127.0.0.1:27017/smok-tg-bot";
export const PHONE: string = "+7 (995) 555 55-55";
export const USERNAME: string = "d_maksimyk";
export const TOKEN: string = "1887588781:AAHezx6VceXcxQUBgDWRrLYV9jOaTaqSm88";
export const bot = Telegram.fromToken(TOKEN);

export const SYMBOL_RUB: string = "₽"

export const START_DIALOG: string = `Привет, Друг! 👋\nCпасибо, что зашел к нам, приятных покупок! 🛒`;
export const MENU_CAPTION: string = `Вы вернулись в меню! =)`;
export const HELP_CAPTION: string = `Для заказа - текст, текст, текст, текст, текст, текст\n\n\nНомер для связи: ${PHONE}`;
export const ERRCMD_CAPTION: string = `Такой команды не существует, выберите команду из списка`;

export const PRODUCT_CAPTION: string = `Список всех категорий:\n`;
export const PRODUCT_CAPTION_BRAND: string = `Список всех производителей:\n`;
export const PRODUCT_CAPTION_PRODUCT: string = `Список всех товаров:\n`;
export const PRODUCT_CAPTION_DESCRIPTON: string = `Описание товара:\n`;
export const PRODUCT_CAPTION_NONE: string = `<b>На данный момент</b> нет ничего в данном разделе! \nОжидайте, всему своё время =)`;
export const CONTROL_CAPTION: string = `Вы успешно вошли в панель управления.\nНажмите кнопку для продолжения.`;

export const DELIVERY_CAPTION: string = `<b>Все о доставке</b>:\nЦена доставки по Перми: 912931293123 ${SYMBOL_RUB}\nЦена доставки вертолётом: 222222222222 ${SYMBOL_RUB}`;

export const WHOLESALE_CAPTION: string = `При заказае оптом, скидка,\n................какой-то текст:\n`;

export const STOCK_CAPTION: string = `Список всех акций:\n`