// Slider.js

import React, { Component } from "react";

class Slider extends Component {
    constructor() {
        super();

        this.state = {
            value: 1,
        };

    }

    // Changes slider position and value
    setSize = (e) => {
        const size = e.target.value;
        this.setState({value: size});

        // Calls canvas brushSize to change brush size
        this.props.onChange (size);
    }

    render() {
        return (
            <button className="button-style">
                Brush Size
                <input
                    type = "range"
                    min = "1"
                    max = "50"
                    id = "brushSlider"
                    value = {this.state.value}
                    onChange = {this.setSize}/>
            </button>
        )
    }
}

export default Slider;