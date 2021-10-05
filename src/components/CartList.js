import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
import history from "../history";

import Button from "./Button";
import "./CartList.css";

class CartList extends React.Component {
  onDeleteFromCartButtonClick = (i) => {
    this.props.deleteFromCart(i);
  };
  onAddMoreClick = () => {
    history.push("/");
    window.location.reload();
  };

  toSeeEmptyFunc = () => {
    if (this.props.cart?.length === 0) {
      return "Your cart is empty! Please add something to cart.";
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="title_style">Cart</h1>
        <p className="message_style">You Can View Items saved In Cart Here</p>
        <Button
          label="Add More"
          onClick={() => this.onAddMoreClick()}
          btnColor="rgb(74, 74, 230)"
        />
        {this.props.cart?.map((item, index) => {
          return (
            <div key={index} className="main_container">
              <ul className="item_style">{item.itemName}</ul>
              <Button
                label="Delete From Cart"
                onClick={() => this.onDeleteFromCartButtonClick(index)}
                btnColor="red"
              />
            </div>
          );
        })}
        <p className="error_style">{this.toSeeEmptyFunc()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteFromCart: actions.deleteFromCart,
      addToCart: actions.addToCart,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
