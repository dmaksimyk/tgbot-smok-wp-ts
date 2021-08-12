import { ADMIN_ID } from "config";
import { CallbackQueryContext } from "puregram";
import { setScene } from "scenes";
import { StepContext } from "@puregram/scenes";

const DellStocksControl = (context: CallbackQueryContext & StepContext) => {
  if (context.senderId === ADMIN_ID) setScene("dell_stock", context);
  return;
};

export default DellStocksControl;
