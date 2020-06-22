// EraserButton.js

import React, { Component } from "react";

class EraserButton extends Component {
    getEraser = () => {
        const eraser = "#FFFFFF";
        this.props.onClick(eraser);
      };

    render() {
        return (
            <button className="button-style" onClick={this.getEraser}>Eraser</button>
        );
    }
}

export default EraserButton;