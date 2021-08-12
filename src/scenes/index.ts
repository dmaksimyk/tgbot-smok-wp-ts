import { SessionManager } from "@puregram/session";
import { SceneManager, StepContext } from "@puregram/scenes";
import { add_product, add_stock, dell_product, dell_stock } from "./scenes";

export const sessionManager = new SessionManager();
export const sceneManager = new SceneManager();

export const setScene = (
  scene: "add_product" | string,
  context: StepContext
) => {
  context.scene.enter(scene);
};

sceneManager.addScenes([
  ...[add_product],
  ...[dell_product],
  ...[add_stock],
  ...[dell_stock],
]);
