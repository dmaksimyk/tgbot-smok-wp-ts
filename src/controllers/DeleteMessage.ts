import { MessageContext } from "puregram"

const DeleteMessage = (message: MessageContext) => {
  message.deleteMessage();
}

export default DeleteMessage