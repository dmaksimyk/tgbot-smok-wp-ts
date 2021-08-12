import { DeleteMessage } from "controllers";
import {
  AddProductsControl,
  DellProductsControl,
  DellStocksControl,
  Help,
  Menu,
  ProductsControl,
  StocksControl,
  AddStocksControl,
} from "modules";
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
    case "Акции":
      StocksControl(contextCallback);
      break;
    case "Добавить товар":
      AddProductsControl(contextCallback);
      break;
    case "Удалить товар":
      DellProductsControl(contextCallback);
      break;
    case "Добавить акцию":
      AddStocksControl(contextCallback);
      break;
    case "Удалить акцию":
      DellStocksControl(contextCallback);
      break;
    default:
      break;
  }
};

export default FindCmd;
