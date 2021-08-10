import { ERRCMD_CAPTION } from "config";
import { keyboardErrCmd } from "Keyboards";
import { MessageContext } from "puregram";

const ErrorCmd = (context: MessageContext) =>
  context.send(ERRCMD_CAPTION, { reply_markup: keyboardErrCmd });

export default ErrorCmd;
