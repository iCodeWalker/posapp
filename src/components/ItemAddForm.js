import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/index";
import "./ItemAddForm.css";

class ItemAddForm extends React.Component {
  state = {
    ...this.returnList(),
  };

  returnList() {
    if (this.props.currentIndex === -1) {
      return {
        itemName: "",
      };
    } else {
      return this.props.list?.[this.props.currentIndex];
    }
  }
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.currentIndex === -1) {
      this.props.addItem(this.state);
    }
    this.setState({
      itemName: "",
    });
  };

  handleKeypress = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  };
  componentDidMount() {
    this.returnList();
    this.setState({
      itemName: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <div>
          <input
            name="itemName"
            placeholder="Enter name of Item"
            value={this.state.itemName || ""}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeypress}
            type="text"
            className="form_input"
            id="name"
            required
          />
        </div>
        <button type="submit" className="btn_submit">
          Add Item
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    currentIndex: state.currentIndex,
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      addItem: actions.addItem,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemAddForm);
