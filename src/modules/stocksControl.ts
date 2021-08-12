import { ADMIN_ID } from "config";
import { keyboardStockControl } from "Keyboards";
import { CallbackQueryContext } from "puregram";

const StocksControl = (context: CallbackQueryContext) => {
  if (context.senderId === ADMIN_ID)
    context.message?.editMessageText("Выберите дальнейшее действие:", {
      reply_markup: keyboardStockControl,
    });
  return;
};

export default StocksControl;
