import { ADMIN_ID } from "config";
import { CallbackQueryContext } from "puregram";
import { setScene } from "scenes";
import { StepContext } from "@puregram/scenes";

const DellProductsControl = (context: CallbackQueryContext & StepContext) => {
  if (context.senderId === ADMIN_ID) setScene("dell_product", context);
  return;
};

export default DellProductsControl;
