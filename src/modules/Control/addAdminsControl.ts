import { CallbackQueryContext } from "puregram";
import { setScene } from "scenes";
import { StepContext } from "@puregram/scenes";
import { ADMIN_ID, DEV_ID } from "config";

const AddAdminsControl = (context: CallbackQueryContext & StepContext) => {
  if ((context as any).isAdmin) {
    if (context.senderId === ADMIN_ID || context.senderId === DEV_ID)
      setScene("add_admin", context);
  }
  return;
};

export default AddAdminsControl;
