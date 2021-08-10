import { START_DIALOG } from "config";
import { Control, ErrorCmd, Help, Menu, Products } from "modules";
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
      Products(context);
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
