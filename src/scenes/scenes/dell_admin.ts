import { StepScene } from "@puregram/scenes";
import { generateKeyboardDellAdmins, keyboardBackPage, keyboardProductAddControl } from "Keyboards";
import database from "database";
import { anyDeleteAndSendMessage, anySendOrEditMessage, sendMessage } from "modules/Messages";

const TEXT_CANCEL_ADD_ADMIN: string = "<b>Вы отменили</b> добавление администратора!";

const admin = new StepScene("dell_admin", [
  async (context) => {
    if (context.queryPayload) {
      switch(context.queryPayload) {
        case "Вернуться":
          anySendOrEditMessage(context, TEXT_CANCEL_ADD_ADMIN)
          return context.scene.leave()
        case Number(context.queryPayload):
          await database("DELETE_ADMINS", {id: Number(context.queryPayload)})
          anySendOrEditMessage(context, "<b>Вы успешно удалили</b> администратора!")
          return context.scene.leave()
        default: break; 
      }
    }

    const admins = await database("GET_ALL_ADMINS", undefined);

    if (context.scene.step.firstTime && admins.length >= 1) {
      anyDeleteAndSendMessage(
        context, 
        "Список всех аминистраторов:", 
        generateKeyboardDellAdmins(admins)
      )
    } else {
      anyDeleteAndSendMessage(context, "<b>Админов не найдено</b>, добавьте их!")
      return context.scene.leave();
    }
  },
  async (context) => {
    const { admin_id, admin_name } = context.scene.state;
    if (context.scene.step.firstTime) {
      return sendMessage(
        context, 
        `<b>Проверка данных:</b>\n\n<b>ID пользователя</b>: ${admin_id}\n<b>Короткое имя пользователя:</b> ${admin_name}`, 
        keyboardProductAddControl
      );
    }

    if (context?.queryPayload === "Назад") return context.scene.step.go(0);
    if (context?.queryPayload === "Добавить") {
      await database("SAVE_ADMINS", {
        id: admin_id,
        approve: Date.now()
      });
      await anyDeleteAndSendMessage(context, `<b>Вы добавили администратора ${admin_name}!</b>`)
    }
    if (context?.queryPayload === "Отмена") 
      await anyDeleteAndSendMessage(context, TEXT_CANCEL_ADD_ADMIN)
    if (context?.queryPayload === "Добавить" || context?.queryPayload === "Отмена") 
      return context.scene.step.next();
  },
]);

export default admin;
