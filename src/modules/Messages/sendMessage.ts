import { StepContext } from "@puregram/scenes";
import { CallbackQueryContext, MessageContext } from "puregram";

const sendMessage = (
  context: (CallbackQueryContext & StepContext) | MessageContext | CallbackQueryContext,
  msg: string,
  keyboard?: any
) => {
  try {
    if (context instanceof CallbackQueryContext) return context.message?.send(msg, { parse_mode: "HTML", reply_markup: keyboard });
    if (context instanceof MessageContext) return context.send(msg, { parse_mode: "HTML", reply_markup: keyboard });
  } catch (e) {
    return console.log("messageError-sendMessage:", e);
  }
  return;
};

export default sendMessage;
