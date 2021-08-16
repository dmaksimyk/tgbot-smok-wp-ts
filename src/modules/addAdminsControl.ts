import { CallbackQueryContext } from "puregram";
import { setScene } from "scenes";
import { StepContext } from "@puregram/scenes";

const AddAdminsControl = (context: CallbackQueryContext & StepContext) => {
  if ((context as any).isAdmin) setScene("add_admin", context);
  return;
};

export default AddAdminsControl;
