// ColorButton.js

import React, { Component } from "react";

class ColorButton extends Component {
  // gets the hexcolor chosen by user
  getColor = (e) => {
    const color = e.currentTarget.value;

    this.props.onClick(color);
  };

  render() {
    return (
      <button className="button-style" onClick={this.props.onClick}>
          <label htmlFor="choose-color">
          Color
          </label>
          <input
            className="choose-color"
            name="choose-color"
            id="choose-color"
            type="color"
            onChange={this.getColor}
            />
      </button>
    );
  }
}

export default ColorButton;