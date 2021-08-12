import { ADMIN_ID } from "config";
import { CallbackQueryContext } from "puregram";
import { setScene } from "scenes";
import { StepContext } from "@puregram/scenes";

const AddStocksControl = (context: CallbackQueryContext & StepContext) => {
  if (context.senderId === ADMIN_ID) setScene("add_stock", context);
  return;
};

export default AddStocksControl;
