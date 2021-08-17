import { HELP_CAPTION } from "config";
import { MessageContext } from "puregram";
import { sendMessage } from "./Messages";

const Delivery = (context: MessageContext) =>
  sendMessage(context, HELP_CAPTION);

export default Delivery;
