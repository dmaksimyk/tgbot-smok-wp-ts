import { MessageContext } from "puregram";

const DeleteMessage = (message: MessageContext) => {
  message
    .deleteMessage()
    .then(() => console.log)
    .catch(() => console.log("Удалено"));
};

export default DeleteMessage;
