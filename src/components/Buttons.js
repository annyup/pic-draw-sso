// Button.js

import React from 'react';
import ClearButton from './ClearButton.js';
import ColorButton from './ColorButton.js';
import EraserButton from './EraserButton.js';
import PostButton from './PostButton.js';
import GalleryButton from './GalleryButton.js';
import SliderButton from './SliderButton.js';


const Buttons = (props) => {
    return (
        <div className="button-container">
            <span className="palette-icon">&#x1F3A8;</span>
            <span class="sr-only">palette</span>
            <ColorButton onClick={props.colorFunction}/>
            <SliderButton onChange={props.brushFunction}/>
            <EraserButton onClick={props.eraserFunction}/>
            <ClearButton onClick={props.clearFunction}/>
            <PostButton onClick={props.postFunction}/>
            <GalleryButton/>
        </div>
    )
}

export default Buttons;