// GalleryButton.js

import React, { Component } from "react";
import { Link } from 'react-router-dom';

class GalleryButton extends Component {

    render() {
        return (         

        <Link to="/gallery">
            <button className="button-style">
            Gallery
            <i class="far fa-image"></i>
            </button>
        </Link>
        );
    }
}

export default GalleryButton;