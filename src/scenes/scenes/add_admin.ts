import { StepScene } from "@puregram/scenes";
import { keyboardBackPage, keyboardProductAddControl } from "Keyboards";
import database from "database";
import { anyDeleteAndSendMessage, anySendOrEditMessage, sendMessage } from "modules/Messages";

const TEXT_CANCEL_ADD_ADMIN: string = "<b>Вы вышли</b> из раздела: <b>Добавление администраторов</b>!";

const admin = new StepScene("add_admin", [
  async (context) => {
    if (context?.queryPayload === "Вернуться") {
      anySendOrEditMessage(context, TEXT_CANCEL_ADD_ADMIN)
      return context.scene.leave()
    }

    if (context?.forwardMessage?.from?.id) {
      if (context.scene.step.firstTime )
        return anyDeleteAndSendMessage(
          context, 
          "<b>Перешлите сообщение</b> пользователя, которого хотите сделать администратором!", 
          keyboardBackPage()
        )
      
      const check = await database("GET_ADMINS", { id: Number(context.forwardMessage?.from?.id) })
      if (check) {
        anySendOrEditMessage(context, "<b>Пользователь уже является администратором!</b>")
        return context.scene.leave()
      }
      context.scene.state.admin_id = Number(context?.forwardMessage?.from?.id);
      context.scene.state.admin_name = `@${context.forwardMessage?.from?.username}`;
      return context.scene.step.next();
    } else {
      return anyDeleteAndSendMessage(
        context, 
        "<b>Перешлите сообщение</b> пользователя, которого хотите сделать администратором!", 
        keyboardBackPage()
      )
    }
  },
  async (context) => {
    const { admin_id, admin_name } = context.scene.state;
    if (context.scene.step.firstTime) {
      return sendMessage(
        context, 
        `<b>Проверка данных:</b>\n\n<b>ID пользователя</b>: ${admin_id}\n<b>Короткое имя пользователя:</b> ${admin_name}\n\n<b>ВАЖНО! ЗАПИШИТЕ ID АДМИНИСТРАТОРА ДЛЯ УДАЛЕНИЯ В БУДУЩЕМ</b>`, 
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
