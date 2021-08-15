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
  GeneratePages,
} from "modules";
import { CallbackQueryContext, MessageContext } from "puregram";
import { StepContext } from "@puregram/scenes";
import { PRODUCT_CAPTION, PRODUCT_CAPTION_BRAND, PRODUCT_CAPTION_PRODUCT, STOCK_CAPTION } from "config";

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

    if (obj.type === "stock") {
      if (obj.back) return GeneratePages(contextCallback, "start_stocks", STOCK_CAPTION);
      if (obj.id) return GeneratePages(contextCallback, "stock_page", "", Number(obj.id))
    }

    if (obj.type === "product") {
      // back menu
      if (obj.back) return GeneratePages(contextCallback, "start_products", PRODUCT_CAPTION);

      // next product page
      if (obj.id) 
        return GeneratePages(contextCallback, "product_page", "", Number(obj.id));

      // next products
      if (obj.brand)
        return GeneratePages( contextCallback, "products", PRODUCT_CAPTION_PRODUCT, 1, { name: obj.brand, type: "brand" }, "name" );

      // next brands
      if (obj.category)
        return GeneratePages( contextCallback, "products", PRODUCT_CAPTION_BRAND, 1, { name: obj.category, type: "category" }, "brand");
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
