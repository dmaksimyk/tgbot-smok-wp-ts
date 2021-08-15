import { CONTROL_CAPTION } from "config";
import { keyboardControl } from "Keyboards";
import { MessageContext } from "puregram";

const Control = (context: MessageContext) => {
  if ((context as any).isAdmin) {
    context.send(CONTROL_CAPTION, { reply_markup: keyboardControl });
  }
  return
};

export default Control;
