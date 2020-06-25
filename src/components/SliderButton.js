// SliderButton.js

import React, { Component } from "react";

class SliderButton extends Component {
    constructor() {
        super();

        this.state = {
            value: 1,
        };
    }

    // changes slider position and value
    setSize = (e) => {
        const size = e.target.value;
        this.setState({value: size});

        // calls canvas brushSize to change brush size
        this.props.onChange (size);
    }

    render() {
        return (
            <button className="button-style">
                <input
                    className="brush-slider"
                    type = "range"
                    min = "1"
                    max = "50"
                    id = "brush-slider"
                    value = {this.state.value}
                    onChange = {this.setSize}/>
                <span class="sr-only">Slider</span>
            </button>
        )
    }
}

export default SliderButton;