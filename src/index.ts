import { TOKEN } from "./config";
import { Telegram } from "puregram";
import { FindCmd, FindCmdCallback } from "controllers";

const bot = Telegram.fromToken(TOKEN);

bot.updates.on("message", (context) => {
  const message = context.text;

  if (!message) return;
  FindCmd(message, context);
});

bot.updates.on("callback_query", (context) => {
  const msgContext = context.message;

  if (!msgContext) return;
  FindCmdCallback(msgContext, context);
});

bot.updates
  .startPolling()
  .then(() => console.log(`@${bot.bot.username} started polling!`));
