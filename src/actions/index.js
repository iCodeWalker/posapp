import { ADD_ITEM, DELETE_ITEM, ADD_TO_CART, DELETE_FROM_CART } from "./types";

export const addItem = (data) => {
  return {
    type: ADD_ITEM,
    payload: data,
  };
};

export const deleteItem = (index) => {
  return {
    type: DELETE_ITEM,
    payload: index,
  };
};

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const deleteFromCart = (index) => {
  return {
    type: DELETE_FROM_CART,
    payload: index,
  };
};
