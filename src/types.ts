export type TKeyboardErrCmd = "🆘 Помощь" | "⬅ Меню" | "ALL";

export type TTypes =
  | "SAVE_PRODUCT"
  | "SAVE_STOCK"
  | "GET_PRODUCT"
  | "GET_STOCK"
  | "DELETE_PRODUCT"
  | "DELETE_STOCK";

export type TMethods = {
  ["SAVE_PRODUCT"]: {
    id: number;
    category: string;
    brand: string;
    name: string;
    text: string;
    price: number;
    photo: string;
  };
  ["SAVE_STOCK"]: { id: number; name: string };
  ["DELETE_PRODUCT"]: { id: number };
  ["DELETE_STOCK"]: { id: number };
  ["GET_PRODUCT"]: undefined;
  ["GET_STOCK"]: undefined;
};

export type TProducts = {
  id: number;
  name: string;
  text: string;
  photo: string;
  count: number;
};

export type TParams = <T extends TTypes>(type: T, data: TMethods[T]) => any;
