import { keyboardStockControl } from "Keyboards";
import { CallbackQueryContext } from "puregram";

const StocksControl = (context: CallbackQueryContext) => {
  if ((context as any).isAdmin)
    context.message?.editMessageText("Выберите дальнейшее действие:", {
      reply_markup: keyboardStockControl,
    });
  return;
};

export default StocksControl;
