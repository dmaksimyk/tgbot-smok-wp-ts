import { ERRCMD_CAPTION } from "config";
import { keyboardErrCmd } from "Keyboards";
import { MessageContext } from "puregram";
import { sendMessage } from "./Messages";

const ErrorCmd = (context: MessageContext) =>
  sendMessage(context, ERRCMD_CAPTION, { reply_markup: keyboardErrCmd });

export default ErrorCmd;
