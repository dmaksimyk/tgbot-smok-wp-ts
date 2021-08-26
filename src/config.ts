import { Telegram } from "puregram";

export const ADMIN_ID: number = 770651836;
export const DEV_ID: number = 770651836;
export const DATABASE_LINK: string = "mongodb://127.0.0.1:27017/smok-tg-bot";
export const PHONE: string = "+7 (996) 575 30-33";
export const USERNAME: string = "d_maksimyk";
export const TOKEN: string = "1887588781:AAHezx6VceXcxQUBgDWRrLYV9jOaTaqSm88";
export const bot = Telegram.fromToken(TOKEN);

export const SYMBOL_RUB: string = "₽"

export const START_DIALOG: string = `Привет, Друг! 👋\nCпасибо, что зашел к нам, приятных покупок! 🛒`;
export const MENU_CAPTION: string = `Вы вернулись в меню! =)`;
export const HELP_CAPTION: string = `🆘 Помощь 🆘\n
1) Предоплата 100%.
2) Режим работы 24/7.
3) Продажа строго лицам старше 18 лет.
4) На рынке уже 2 года`;
// Номер для связи ${PHONE}
// Но пока не указывай узнаю позже у знакомого чтобы бан не сделать

export const ERRCMD_CAPTION: string = `Такой команды не существует, выберите команду из списка`;

export const PRODUCT_CAPTION: string = `Список всех категорий:\n`;
export const PRODUCT_CAPTION_BRAND: string = `Список всех производителей:\n`;
export const PRODUCT_CAPTION_PRODUCT: string = `Список всех товаров:\n`;
export const PRODUCT_CAPTION_DESCRIPTON: string = `Описание товара:\n`;
export const PRODUCT_CAPTION_NONE: string = `<b>На данный момент</b> нет ничего в данном разделе! \nОжидайте, всему своё время =)`;
export const CONTROL_CAPTION: string = `Вы успешно вошли в панель управления.\nНажмите кнопку для продолжения.`;

export const DELIVERY_CAPTION: string = `✅ <b>Доставка</b> ✅\n
<b>Бесплатная доставка:</b> Центр Перми И Закамск.
<b>Отдельные районы:</b> от 90 рублей.
<b>Cамовывоз:</b> по договорённости.
`;

export const WHOLESALE_CAPTION: string = `<b>✅ Опт ✅</b>\n
📦 <b> Минимальное количество товара:</b> от 10 штук.
🍓 <b> Собери свой mix-block вкусов</b> на своё предпочтение из ассортимента.

💨 <b>Izi 1600 тяг</b>
 · От 10 штук 390
 · От 20 штук 360

 💨 <b>Elf Bar 800</b>
 · От 10 штук 360
 · От 20 штук 340

 💨 <b>Elf Bar 1500</b>
 · От 10 штук 390
 · От 20 штук 360

 💨 <b>City 1600 тяг</b>
 · От 10 штук 400
 · От 20 штук 370

 💨 <b>Hqd 1200 тяг</b>
 · От 10 штук 360
 · От 20 штук 330`;

export const STOCK_CAPTION: string = `Список всех акций:\n`