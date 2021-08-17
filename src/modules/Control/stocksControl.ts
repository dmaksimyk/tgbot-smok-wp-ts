import { keyboardStockControl } from "Keyboards";
import { editMessage } from "modules/Messages";
import { CallbackQueryContext } from "puregram";

const StocksControl = (context: CallbackQueryContext) => {
  if ((context as any).isAdmin)
    editMessage(context, "Выберите дальнейшее действие:", keyboardStockControl);
  return;
};

export default StocksControl;
