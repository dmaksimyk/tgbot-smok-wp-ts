import { ADMIN_ID, MENU_CAPTION } from "config";
import { keyboardMenu, keyboardMenuAdmin } from "Keyboards";
import { CallbackQueryContext, MessageContext } from "puregram";

const Menu = (
  context: MessageContext,
  text?: string,
  allContext?: CallbackQueryContext
) => {
  if (allContext) {
    context.send(text || MENU_CAPTION, {
      reply_markup:
        allContext.senderId === ADMIN_ID ? keyboardMenuAdmin : keyboardMenu,
    });
  } else {
    context.send(text || MENU_CAPTION, {
      reply_markup:
        context.senderId === ADMIN_ID ? keyboardMenuAdmin : keyboardMenu,
    });
  }
};

export default Menu;
