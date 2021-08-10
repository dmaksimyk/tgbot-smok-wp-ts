import { TOKEN } from "./config";
import { Telegram } from "puregram";
import { FindCmd, FindCmdCallback } from "controllers";

const bot = Telegram.fromToken(TOKEN);

bot.updates.on("message", (context) => {
  if (!context.text) return;
  FindCmd(context.text, context);
});

bot.updates.on("callback_query", (context) => {
  if (!context.message) return;
  FindCmdCallback(context.message, context);
});

bot.updates
  .startPolling()
  .then(() => console.log(`@${bot.bot.username} started polling!`));
