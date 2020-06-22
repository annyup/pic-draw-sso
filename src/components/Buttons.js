// Button.js

import React from 'react';
import ClearButton from './ClearButton.js';
import ColorButton from './ColorButton.js';
import EraserButton from './EraserButton.js';
import PostButton from './PostButton.js';


const Buttons = (props) => {
    return (
        <div className="button-container">
            <ColorButton onClick={props.colorFunction}/>
            <ClearButton onClick={props.clearFunction}/>
            <EraserButton onClick={props.eraserFunction}/>
            <PostButton onClick={props.postFunction}/>
        </div>
    )
}

export default Buttons;