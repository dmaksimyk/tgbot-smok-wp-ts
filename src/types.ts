export type TKeyboardErrCmd = "🆘 Помощь" | "⬅ Меню" | "ALL";

export type TTypes = "SAVE_PRODUCT" | "SAVE_STOCK" | "GET_PRODUCT" | "GET_STOCK";

export type TMethods = {
  ["SAVE_PRODUCT"]: {
    id: number;
    name: string;
    text: string;
    photo: string;
    count: number;
  };
  ["SAVE_STOCK"]: {
    id: number;
    name: string;
  };
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
// ["GET_STOCK"]: {
//   id: number;
//   name: string;
// };

export type TParams = <T extends TTypes>(type: T, data: TMethods[T]) => any;
