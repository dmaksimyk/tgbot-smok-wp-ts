import { SessionManager } from "@puregram/session";
import { SceneManager, StepContext } from "@puregram/scenes";
import {
  add_admin,
  add_product,
  add_stock,
  dell_admin,
  dell_product,
  dell_stock,
} from "./scenes";

export const sessionManager = new SessionManager();
export const sceneManager = new SceneManager();

type TProducts = "add_product" | "dell_product";
type TStock = "add_stock" | "dell_stock";
type TAdmin = "add_admin" | "dell_admin";
type TScene = TProducts | TStock | TAdmin;

export const setScene = (scene: TScene, context: StepContext) => {
  context.scene.enter(scene);
};

sceneManager.addScenes([
  ...[add_product],
  ...[dell_product],
  ...[add_stock],
  ...[dell_stock],
  ...[add_admin],
  ...[dell_admin],
]);
