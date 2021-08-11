import { CallbackQueryContext, MessageContext } from "puregram";
import { FindCmd, FindCmdCallback } from "controllers";
import { sceneManager, sessionManager } from "scenes";
import { StepContext } from "@puregram/scenes";
import { bot } from 'config';

bot.updates.use(sessionManager.middleware);
bot.updates.use(sceneManager.middleware);
bot.updates.use(sceneManager.middlewareIntercept);

bot.updates.on("message", (context: StepContext & MessageContext) => {
  if (!context.text) return;
  FindCmd(context.text, context);
});

bot.updates.on("callback_query", (context: StepContext & CallbackQueryContext) => {
  if (!context.message) return;
  FindCmdCallback(context.message, context);
});

bot.updates
  .startPolling()
  .then(() => console.log(`@${bot.bot.username} started polling!`));
