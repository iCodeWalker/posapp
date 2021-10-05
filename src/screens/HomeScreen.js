import React, { useEffect } from "react";

import ItemAddForm from "../components/ItemAddForm";
import ItemList from "../components/ItemList";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { connect } from "react-redux";

import "./HomeScreen.css";

import history from "../history";

const HomeScreen = () => {
  const onIconClick = () => {
    history.push("cart");

    window.location.reload();
  };
  let cart = JSON.parse(localStorage.getItem("cartItems"));
  useEffect(() => {
    console.log(cart);
  }, [cart]);
  return (
    <div>
      <p className="title">Add Item Here</p>
      <div style={{ display: "flex" }}>
        <ItemAddForm />
        <div>
          <ShoppingCartIcon
            sx={{ fontSize: 45 }}
            className="icon_style"
            onClick={onIconClick}
          />
          <p className="cart_item_style">{cart?.length}</p>
        </div>
      </div>

      <div className="itemList_style">
        <ItemList />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(HomeScreen);
