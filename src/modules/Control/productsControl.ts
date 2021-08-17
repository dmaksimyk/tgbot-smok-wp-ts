import { keyboardProductControl } from "Keyboards";
import { editMessage } from "modules/Messages";
import { CallbackQueryContext } from "puregram";

const ProductsControl = (context: CallbackQueryContext) => {
  if ((context as any).isAdmin) 
    editMessage(context, "Выберите дальнейшее действие:", keyboardProductControl);
  return;
};

export default ProductsControl;
