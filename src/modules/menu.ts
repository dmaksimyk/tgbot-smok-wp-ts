import { MENU_CAPTION } from "config";
import { keyboardMenu, keyboardMenuAdmin } from "Keyboards";
import { CallbackQueryContext, MessageContext } from "puregram";
import { sendMessage } from "./Messages";

const Menu = (context: MessageContext | CallbackQueryContext, text?: string) => {
  sendMessage(
    context,
    text || MENU_CAPTION,
    (context as any).isAdmin ? keyboardMenuAdmin : keyboardMenu
  );
}

export default Menu;
