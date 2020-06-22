// Button.js

import React from 'react';
import ClearButton from './ClearButton.js';
import ColorButton from './ColorButton.js';
import EraserButton from './EraserButton.js';
import PostButton from './PostButton.js';
import GalleryButton from './GalleryButton.js';
import Slider from './Slider.js';


const Buttons = (props) => {
    return (
        <div className="button-container">
            <ColorButton onClick={props.colorFunction}/>
            <Slider id='slider' onChange={props.brushSize}/>
            <EraserButton onClick={props.eraserFunction}/>
            <ClearButton onClick={props.clearFunction}/>
            <PostButton onClick={props.postFunction}/>
            <GalleryButton/>
        </div>
    )
}

export default Buttons;