import { createAction } from "../../utils/reducer/reducer";
import CART_ACTION_TYPES from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
  const { id } = productToAdd;
  const isProductExist = cartItems.find((item) => item.id === id);
  if (isProductExist) {
    return cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const { id } = productToRemove;
  const isProductExist = cartItems.find((item) => item.id === id);
  if (isProductExist.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== id);
  }
  if (isProductExist) {
    return cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
};

const deleteCartItem = (cartItems, productToDelete) => {
  const { id } = productToDelete;
  return cartItems.filter((cartItem) => cartItem.id !== id);
};

export const addToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const deleteItem = (cartItems, productToDelete) => {
  const newCartItems = deleteCartItem(cartItems, productToDelete);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsOpen = (boolean) => {
  return createAction(CART_ACTION_TYPES.SET_IS_OPEN, boolean);
};
