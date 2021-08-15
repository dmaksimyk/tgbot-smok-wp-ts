import { StepContext } from "@puregram/scenes";
import { CallbackQueryContext, MessageContext } from "puregram";

const deleteMessage = (
  context: (CallbackQueryContext & StepContext) | MessageContext | CallbackQueryContext
) => {
  try {
    if (context instanceof CallbackQueryContext) return context.message?.deleteMessage();
    if (context instanceof MessageContext) return context.deleteMessage();
  } catch (e) {
    return console.log("messageError-deleteMessage:", e);
  }
  return;
};

export default deleteMessage;
