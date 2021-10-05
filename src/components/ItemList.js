import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
import Button from "./Button";
import "./ItemList.css";
import history from "../history";

class ItemList extends React.Component {
  onAddToCartButtonClick = (i) => {
    this.props.addToCart(i);
    history.push("cart");
  };
  onDeleteButtonClick = (i) => {
    this.props.deleteItem(i);
  };

  toSeeEmptyListFunc = () => {
    if (this.props.list?.length === 0) {
      return "Your List is empty! Add items to list.";
    }
  };
  render() {
    return (
      <div>
        {this.props.list?.map((item, index) => {
          return (
            <>
              <div key={index} className="main_container2">
                <ul className="item_style2">{item.itemName}</ul>
                <Button
                  label="Add To Cart"
                  onClick={() => this.onAddToCartButtonClick(item)}
                  btnColor="green"
                />
                <Button
                  label="Delete Item"
                  onClick={() => this.onDeleteButtonClick(index)}
                  btnColor="red"
                />
              </div>
              <hr />
            </>
          );
        })}
        <p className="error2_style">{this.toSeeEmptyListFunc()}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteItem: actions.deleteItem,
      addToCart: actions.addToCart,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
