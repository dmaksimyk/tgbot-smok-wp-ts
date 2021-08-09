import { ERRCMD_CAPTION } from "config";
import { MessageContext } from "puregram";
import { keyboardErrCmd } from "Keyboards";

const ErrorCmd = (context: MessageContext) => {
  return context.send(ERRCMD_CAPTION, { reply_markup: keyboardErrCmd });
};

export default ErrorCmd;
