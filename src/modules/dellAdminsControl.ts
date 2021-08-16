import { CallbackQueryContext } from "puregram";
import { setScene } from "scenes";
import { StepContext } from "@puregram/scenes";

const DellProductsControl = (context: CallbackQueryContext & StepContext) => {
  if ((context as any).isAdmin) setScene("dell_admin", context);
  return;
};

export default DellProductsControl;
