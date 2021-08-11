import { ADMIN_ID } from "config";
import { keyboardProductControl } from "Keyboards";
import { CallbackQueryContext } from "puregram";

const ProductsControl = (context: CallbackQueryContext) => {
  if (context.senderId === ADMIN_ID) {
    context.message?.editMessageText("Выберите дальнейшее действие:", {
      reply_markup: keyboardProductControl,
    });
  }
  return;
};

export default ProductsControl;
