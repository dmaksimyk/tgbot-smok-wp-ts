import { CallbackQueryContext } from "puregram";
import { setScene } from "scenes";
import { StepContext } from "@puregram/scenes";

const AddProductsControl = (context: CallbackQueryContext & StepContext) => {
  if ((context as any).isAdmin) setScene("add_product", context);
  return;
};

export default AddProductsControl;
