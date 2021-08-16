import { StepScene } from "@puregram/scenes";
import {
  generateKeyboardDellAdmins,
  keyboardBackPage,
  keyboardProductAddControl,
} from "Keyboards";
import database from "database";
import {
  anyDeleteAndSendMessage,
  anySendOrEditMessage,
  sendMessage,
} from "modules/Messages";

const TEXT_CANCEL_ADD_ADMIN: string = "<b>Вы вышли</b> из меню!";

const admin = new StepScene("dell_admin", [
  async (context) => {
    if (context.queryPayload) {
      switch (context.queryPayload) {
        case "Вернуться":
          anySendOrEditMessage(context, TEXT_CANCEL_ADD_ADMIN);
          return context.scene.leave();
        case Number(context.queryPayload):
          await database("DELETE_ADMINS", { id: Number(context.queryPayload) });
          anySendOrEditMessage(
            context,
            "<b>Вы успешно удалили</b> администратора!"
          );
          return context.scene.leave();
        default:
          break;
      }
    }

    const admins = await database("GET_ALL_ADMINS", undefined);

    if (admins.length >= 1) {
      anyDeleteAndSendMessage(
        context,
        "Список всех администраторов:",
        generateKeyboardDellAdmins(admins)
      );
    } else {
      anyDeleteAndSendMessage(
        context,
        "<b>Администраторов не найдено</b>, добавьте их!"
      );
      return context.scene.leave();
    }
  },
]);

export default admin;
