import { MessageContext } from "puregram";

const DeleteMessage = (message: MessageContext) => {
  message
    .deleteMessage()
    .then()
    .catch(() => console.log("Удалено"));
};

export default DeleteMessage;
