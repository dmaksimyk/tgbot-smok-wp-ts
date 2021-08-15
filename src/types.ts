import { CallbackQueryContext, MessageContext } from "puregram";

export type TKeyboardErrCmd = "🆘 Помощь" | "⬅ Меню" | "ALL";

export type TTypes =
  | "SAVE_PRODUCT"
  | "SAVE_STOCK"
  | "GET_PRODUCT"
  | "GET_STOCK"
  | "DELETE_PRODUCT"
  | "DELETE_STOCK"
  | "GET_ADMINS"
  | "DELETE_ADMINS"
  | "SAVE_ADMINS";

export type TMethods = {
  ["SAVE_PRODUCT"]: {
    id: number;
    category: string;
    brand: string;
    name: string;
    text: string;
    price: number;
    photo: any;
  };
  ["SAVE_STOCK"]: { id: number; name: string; text: string };
  ["DELETE_PRODUCT"]: { id: number };
  ["DELETE_STOCK"]: { id: number };
  ["GET_PRODUCT"]: undefined;
  ["GET_STOCK"]: undefined;
  ["GET_ADMINS"]: { id: number };
  ["DELETE_ADMINS"]: { id: number };
  ["SAVE_ADMINS"]: { id: number, approve: number }
};

export type TParams = <T extends TTypes>(type: T, data: TMethods[T]) => any;

// context: CallbackQueryContext | MessageContext,
// typePage: "products" | "start_stocks" | "start_products",
// text: string,
// prev: { name: string; type: "category" | "brand" | "name" },
// type: "category" | "brand" | "name"

export type TTypesGeneratePage = "products" | "start_stocks" | "start_products" | "product_page";
export type TGenerateMethodsPrev = {
  ["products"]: { name: string; type: "category" | "brand" | "name" };
  ["product_page"]: undefined
  ["start_stocks"]: undefined;
  ["start_products"]: undefined;
};
export type TGenerateMethodsType = {
  ["products"]: "category" | "brand" | "name";
  ["product_page"]: undefined
  ["start_stocks"]: undefined;
  ["start_products"]: undefined;
};

export type TGeneratePage = <T extends TTypesGeneratePage>(
  context: CallbackQueryContext | MessageContext,
  typePage: T,
  text: string,
  id?: number,
  prev?: TGenerateMethodsPrev[T],
  type?: TGenerateMethodsType[T]
) => void;
