import { ADMIN_ID, CONTROL_CAPTION, DEV_ID } from "config";
import { keyboardControl, keyboardControlAOD } from "Keyboards";
import { sendMessage } from "modules/Messages";
import { MessageContext } from "puregram";

const Control = (context: MessageContext) => {
  if ((context as any).isAdmin) {
    if (context.senderId === ADMIN_ID || context.senderId === DEV_ID)
      sendMessage(context, CONTROL_CAPTION, keyboardControlAOD);
    else sendMessage(context, CONTROL_CAPTION, keyboardControl);
  }
  return;
};

export default Control;
