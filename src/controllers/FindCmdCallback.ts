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
  ProductsFilter,
} from "modules";
import { CallbackQueryContext, MessageContext } from "puregram";
import { StepContext } from "@puregram/scenes";
import { PRODUCT_CAPTION_BRAND } from "config";

const FindCmd = (
  contextMessage: MessageContext,
  contextCallback: CallbackQueryContext & StepContext
) => {
  const msg = contextCallback.queryPayload;

  if (/\//.test(msg) && /\:/.test(msg)) {
    const rawEntries = msg.split(/\//);
    let obj: any = {};
    for (const rEntry of rawEntries) {
      const value = rEntry.split(":");
      if (value) obj[value[0]] = value[1];
    }

    if (obj.type === "product") {
      // if (obj.name)

      if (obj.category)
        return ProductsFilter(
          contextCallback,
          PRODUCT_CAPTION_BRAND,
          { name: obj.category, type: "category" },
          "brand"
        );
    }
  }

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
