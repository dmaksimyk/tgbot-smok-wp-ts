import { TOKEN } from "./config";
import { Telegram } from "puregram";
import { FindCmd, FindCmdCallback } from "controllers";
import { PromptManager } from "@puregram/prompt";

const bot = Telegram.fromToken(TOKEN);
const promptManager = new PromptManager();

bot.updates.use(promptManager.middleware);
bot.updates.on("message", (context) => {
  console.log("msg:", context.senderId)
  if (!context.text) return;
  FindCmd(context.text, context);
});
bot.updates.on("callback_query", (context) => {
  console.log("cb:", context.senderId)
  if (!context.message) return;
  FindCmdCallback(context.message, context);
});

bot.updates
  .startPolling()
  .then(() => console.log(`@${bot.bot.username} started polling!`));
