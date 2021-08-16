import { ADMIN_ID, CONTROL_CAPTION, DEV_ID } from "config";
import { keyboardControl, keyboardControlAOD } from "Keyboards";
import { MessageContext } from "puregram";

const Control = (context: MessageContext) => {
  if ((context as any).isAdmin) {
    if (context.senderId === ADMIN_ID || context.senderId === DEV_ID)
      context.send(CONTROL_CAPTION, { reply_markup: keyboardControlAOD });
    else context.send(CONTROL_CAPTION, { reply_markup: keyboardControl });
  }
  return;
};

export default Control;
