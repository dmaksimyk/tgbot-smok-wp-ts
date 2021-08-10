import { MessageContext } from "puregram";

const DeleteMessage = (message: MessageContext) => {
  if (message.text) {
    message
      .editMessageText(message.text)
      .then(() => console.log)
      .catch(() => console.log("Изменено"));
  } else {
    message
      .deleteMessage()
      .then(() => console.log)
      .catch(() => console.log("Удалено"));
  }
};

export default DeleteMessage;
