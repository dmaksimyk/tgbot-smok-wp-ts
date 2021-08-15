import { CallbackQueryContext } from "puregram";
import { setScene } from "scenes";
import { StepContext } from "@puregram/scenes";

const AddStocksControl = (context: CallbackQueryContext & StepContext) => {
  if ((context as any).isAdmin) setScene("add_stock", context);
  return;
};

export default AddStocksControl;
