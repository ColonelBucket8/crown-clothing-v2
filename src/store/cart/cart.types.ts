import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
  SET_SHOW_CART = "SET_SHOW_CART",
  SET_CART_ITEMS = "SET_CART_ITEMS",
  SET_CART_COUNT = "SET_CART_COUNT",
  SET_CART_TOTAL = "SET_CART_TOTAL",
}

export type CartItem = CategoryItem & {
  quantity: number;
};
