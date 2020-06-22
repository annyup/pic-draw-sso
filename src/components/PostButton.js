// PostButton.js

import React, { Component } from 'react';

class PostButton extends Component {

    saveCanvas = () => {
        this.props.onClick();
    }

    render() {
        return (
            <button className="button-style" onClick={this.saveCanvas}>
            Save
            <i class="far fa-save"></i>
            </button>
        )
    }
}

export default PostButton;