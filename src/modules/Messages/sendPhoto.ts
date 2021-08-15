import { StepContext } from "@puregram/scenes";
import { CallbackQueryContext, MessageContext } from "puregram";

const sendPhoto = (
  context: (CallbackQueryContext & StepContext) | MessageContext | CallbackQueryContext,
  image: any,
  msg: string,
  keyboard?: any
) => {
  try {
    if (context instanceof CallbackQueryContext)
      return context.message?.sendPhoto(image, {
        parse_mode: "HTML",
        caption: msg,
        reply_markup: keyboard,
      });
    if (context instanceof MessageContext)
      return context.sendPhoto(image, {
        parse_mode: "HTML",
        caption: msg,
        reply_markup: keyboard,
      });
  } catch (e) {
    return console.log("messageError-sendPhoto:", e);
  }
  return;
};

export default sendPhoto;
