import { StepContext } from "@puregram/scenes";
import { CallbackQueryContext, MessageContext } from "puregram";

const anyDeleteAndSendMessage = (
  context:
    | (CallbackQueryContext & StepContext)
    | MessageContext
    | CallbackQueryContext,
  msg: string,
  keyboard?: any
) => {
  try {
    if (context instanceof CallbackQueryContext) {
      context.message?.deleteMessage();
      return context.message?.send(msg, {
        parse_mode: "HTML",
        reply_markup: keyboard,
      });
    }
    if (context instanceof MessageContext) {
      return context.send(msg, { parse_mode: "HTML", reply_markup: keyboard });
    }
  } catch (e) {
    return console.log("messageError-anyDeleteAndSendMessage:", e);
  }
  return;
};

export default anyDeleteAndSendMessage;
