import { USERNAME } from "config";
import { InlineKeyboard } from "puregram";

export const keyboardHelp = InlineKeyboard.keyboard([ 
  InlineKeyboard.urlButton({text: "๐ ะััะผะฐั ัะฒัะทั", url: `t.me/${USERNAME}`}),
])
