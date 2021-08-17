import { USERNAME } from "config";
import { InlineKeyboard } from "puregram";

export const keyboardHelp = InlineKeyboard.keyboard([ 
  InlineKeyboard.urlButton({text: "📞 Прямая связь", url: `t.me/${USERNAME}`}),
])
