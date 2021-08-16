import { keyboardAdminsControl } from "Keyboards";
import { CallbackQueryContext } from "puregram";
import { editMessage } from "./Messages";

const AdminsControl = (context: CallbackQueryContext) => {
  if ((context as any).isAdmin)
    return editMessage(
      context,
      "Выберите дальнейшее действие:",
      keyboardAdminsControl
    );
};

export default AdminsControl;
