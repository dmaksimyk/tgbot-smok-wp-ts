import { START_DIALOG } from "config";
import { ErrorCmd, Help, Menu } from "modules";
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
    default:
      ErrorCmd(context);
      break;
  }
};

export default FindCmd;
