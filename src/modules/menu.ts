import { MENU_CAPTION } from "config";
import { keyboardMenu } from "Keyboards";
import { MessageContext } from "puregram";

const Menu = (context: MessageContext, text?: string) => {
  return context.send(text || MENU_CAPTION, { reply_markup: keyboardMenu });
};

export default Menu;
