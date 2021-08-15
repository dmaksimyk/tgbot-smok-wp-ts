import { KeyboardBuilder } from "puregram";

export const keyboardMenu = new KeyboardBuilder()
  .textButton("📃 Товары")
  .textButton("🈹 Акции")
  .row()
  .textButton("🚚 Доставка")
  .textButton("📦 Опт")
  .row()
  .textButton("🆘 Помощь")
  .resize();

export const keyboardMenuAdmin = new KeyboardBuilder()
  .textButton("📃 Товары")
  .textButton("🈹 Акции")
  .row()
  .textButton("🚚 Доставка")
  .textButton("📦 Опт")
  .row()
  .textButton("🆘 Помощь")
  .row()
  .textButton("🏚 Панель управления")
  .resize();