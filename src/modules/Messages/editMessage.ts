import { StepContext } from "@puregram/scenes";
import { CallbackQueryContext, MessageContext } from "puregram";

const editMessage = (
  context: (CallbackQueryContext & StepContext) | MessageContext | CallbackQueryContext,
  msg: string,
  keyboard?: any
) => {
  try {
    if (context instanceof CallbackQueryContext) return context.message?.editMessageText(msg, { parse_mode: "HTML", reply_markup: keyboard });
    if (context instanceof MessageContext) return context.editMessageText(msg, { parse_mode: "HTML", reply_markup: keyboard });
  } catch (e) {
    return console.log("messageError-editMessage:", e);
  }
  return;
};

export default editMessage;
