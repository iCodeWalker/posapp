import {
  ADD_ITEM,
  DELETE_ITEM,
  ADD_TO_CART,
  DELETE_FROM_CART,
} from "../actions/types";

export const itemReducer = (state, action) => {
  var list = JSON.parse(localStorage.getItem("listItems"));
  var cart = JSON.parse(localStorage.getItem("cartItems"));
  switch (action.type) {
    case ADD_ITEM:
      list.push(action.payload);
      localStorage.setItem("listItems", JSON.stringify(list));
      return { list, currentIndex: -1 };

    case DELETE_ITEM:
      list.splice(action.payload, 1);
      localStorage.setItem("listItems", JSON.stringify(list));
      return { list, currentIndex: -1 };

    case ADD_TO_CART:
      cart.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(cart));
      return { cart, currentIndexCart: -1 };

    case DELETE_FROM_CART:
      cart.splice(action.payload, 1);
      localStorage.setItem("cartItems", JSON.stringify(cart));
      return { cart, currentIndexCart: -1 };

    default:
      return state;
  }
};
