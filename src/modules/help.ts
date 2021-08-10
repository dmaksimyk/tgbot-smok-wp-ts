import { HELP_CAPTION } from "config";
import { keyboardHelp } from "Keyboards";
import { MessageContext } from "puregram";

const Help = (context: MessageContext) =>
  context.send(HELP_CAPTION, { reply_markup: keyboardHelp });

export default Help;
