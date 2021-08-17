import { WHOLESALE_CAPTION } from "config";
import { MessageContext } from "puregram";
import { sendMessage } from "./Messages";

const Wholesale = (context: MessageContext) =>
  sendMessage(context, WHOLESALE_CAPTION);

export default Wholesale;
