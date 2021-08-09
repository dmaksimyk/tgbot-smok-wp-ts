import { DeleteMessage } from "controllers";
import { Help, Menu } from "modules";
import { CallbackQueryContext, MessageContext } from "puregram";

const FindCmd = (
  contextMessage: MessageContext,
  contextCallback: CallbackQueryContext
) => {
  const msg = contextCallback.queryPayload;

  switch (msg) {
    case "⬅ Меню":
      DeleteMessage(contextMessage);
      Menu(contextMessage);
      break;
    case "🆘 Помощь":
      DeleteMessage(contextMessage);
      Help(contextMessage);
      break;
    default:
      break;
  }
};

export default FindCmd;
