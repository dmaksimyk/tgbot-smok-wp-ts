import { DeleteMessage } from "controllers";
import { AddProductsControl, Help, Menu, ProductsControl } from "modules";
import { CallbackQueryContext, MessageContext } from "puregram";

const FindCmd = (
  contextMessage: MessageContext,
  contextCallback: CallbackQueryContext
) => {
  const msg = contextCallback.queryPayload;
  DeleteMessage(contextMessage);

  switch (msg) {
    case "⬅ Меню":
      Menu(contextMessage, undefined, contextCallback);
      break;
    case "🆘 Помощь":
      Help(contextMessage);
      break;
    case "Товар":
      ProductsControl(contextCallback);
      break;
    case "Добавить товар":
      AddProductsControl(contextCallback);
      break;
    default:
      break;
  }
};

export default FindCmd;
