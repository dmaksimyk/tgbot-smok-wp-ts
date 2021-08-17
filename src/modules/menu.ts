import { MENU_CAPTION } from "config";
import { keyboardMenu, keyboardMenuAdmin } from "Keyboards";
import { CallbackQueryContext, MessageContext } from "puregram";
import { sendMessage } from "./Messages";

const Menu = (
  context: MessageContext,
  text?: string,
  allContext?: CallbackQueryContext
) => {
  if (allContext) {
    sendMessage(
      allContext,
      text || MENU_CAPTION,
      (context as any).isAdmin ? keyboardMenuAdmin : keyboardMenu
    );
  } else {
    sendMessage(
      context,
      text || MENU_CAPTION,
      (context as any).isAdmin ? keyboardMenuAdmin : keyboardMenu
    );
  }
};

export default Menu;
