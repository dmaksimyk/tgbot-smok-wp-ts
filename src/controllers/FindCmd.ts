import { PRODUCT_CAPTION, START_DIALOG } from "config";
import { Control, ErrorCmd, Help, Menu, GeneratePages } from "modules";
import { MessageContext } from "puregram";

const FindCmd = (message: string, context: MessageContext) => {
  switch (message) {
    case "/start":
      Menu(context, START_DIALOG);
      break;
    case "⬅ Меню":
      Menu(context);
      break;
    case "🆘 Помощь":
      Help(context);
      break;
    case "📃 Товары":
      GeneratePages(context, "start_products", PRODUCT_CAPTION);
      break;
    case "🏚 Панель управления":
      Control(context)
      break;
    default:
      ErrorCmd(context);
      break;
  }
};

export default FindCmd;
