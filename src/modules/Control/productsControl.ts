import { keyboardProductControl } from "Keyboards";
import { CallbackQueryContext } from "puregram";

const ProductsControl = (context: CallbackQueryContext) => {
  if ((context as any).isAdmin) {
    context.message?.editMessageText("Выберите дальнейшее действие:", {
      reply_markup: keyboardProductControl,
    });
  }
  return;
};

export default ProductsControl;
