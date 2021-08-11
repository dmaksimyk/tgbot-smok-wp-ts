import { DeleteMessage } from "controllers";
import { AddProductsControl, Help, Menu, ProductsControl } from "modules";
import { CallbackQueryContext, MessageContext } from "puregram";
import { StepContext } from "@puregram/scenes";

const FindCmd = (
  contextMessage: MessageContext,
  contextCallback: CallbackQueryContext & StepContext
) => {
  const msg = contextCallback.queryPayload;

  switch (msg) {
    case "⬅ Меню":
      DeleteMessage(contextMessage);
      Menu(contextMessage, undefined, contextCallback);
      break;
    case "🆘 Помощь":
      DeleteMessage(contextMessage);
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
