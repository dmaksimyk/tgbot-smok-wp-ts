import { HELP_CAPTION } from "config";
import { keyboardHelp } from "Keyboards";
import { MessageContext } from "puregram";
import { sendMessage } from "./Messages";

const Help = (context: MessageContext) =>
  sendMessage(context, HELP_CAPTION, { reply_markup: keyboardHelp });

export default Help;
