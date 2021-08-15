import { CallbackQueryContext } from "puregram";
import { setScene } from "scenes";
import { StepContext } from "@puregram/scenes";

const DellStocksControl = (context: CallbackQueryContext & StepContext) => {
  if ((context as any).isAdmin) setScene("dell_stock", context);
  return;
};

export default DellStocksControl;
