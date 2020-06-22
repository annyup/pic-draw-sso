// ColorButton.js

import React, { Component } from "react";

class ColorButton extends Component {
  // function that gets the hexcolor from the type of color attribute of the input element
  getColor = (e) => {
    const color = e.currentTarget.value;
    // variable is passed back up from ColorButton.js -> Buttons.js -> Canvas.js
    this.props.onClick(color);
  };

  render() {
    return (
      // calls the changeColor function that lives in the parent component Canvas.js
      <button className="button-style" onClick={this.props.onClick}>
          <input
            type="color"
            onChange={this.getColor}
            />
            Color
      </button>
    );
  }
}

export default ColorButton;