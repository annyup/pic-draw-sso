// GalleryButton.js

import React, { Component } from "react";

class GalleryButton extends Component {

    render() {
        return (
            <button className="button-style" value="gallery" onClick={this.props.changePage}>
            Gallery
            <i class="far fa-image"></i>
            </button>
        );
    }
}

export default GalleryButton;