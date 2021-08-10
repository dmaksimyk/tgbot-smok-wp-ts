import { ADMIN_ID } from "config";
import { CallbackQueryContext } from "puregram";

const AddProductsControl = (context: CallbackQueryContext) => {
  if (context.senderId === ADMIN_ID) {
    context.message?.send('okay, please wait...')
  }
  return;
};

export default AddProductsControl;
