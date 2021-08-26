import { CallbackQueryContext, MessageContext } from "puregram";
import { FindCmd, FindCmdCallback } from "controllers";
import { sceneManager, sessionManager } from "scenes";
import { StepContext } from "@puregram/scenes";
import { ADMIN_ID, bot, DEV_ID } from "config";
import database from "database";

bot.updates.use(async (context, next) => {
  if (
    context instanceof MessageContext ||
    context instanceof CallbackQueryContext
  ) {
    console.log("user:", Number(context.senderId));
    const admin: boolean = await database("GET_ADMINS", {
      id: Number(context.senderId) || 1,
    });
    (context as any).isAdmin = admin;
    if (context.senderId === ADMIN_ID || context.senderId === DEV_ID)
      (context as any).isAdmin = true;
  }
  return next();
});
bot.updates.use(sessionManager.middleware);
bot.updates.use(sceneManager.middleware);
bot.updates.use(sceneManager.middlewareIntercept);

bot.updates.on("message", (context: StepContext & MessageContext) => {
  if (!context.text) return;
  FindCmd(context.text, context);
});

bot.updates.on(
  "callback_query",
  (context: StepContext & CallbackQueryContext) => {
    if (!context.message) return;
    FindCmdCallback(context.message, context);
  }
);

bot.updates
  .startPolling()
  .then(() => console.log(`@${bot.bot.username} started polling!`));
