// ClearButton.js

import React from "react";

// receive props from parent Buttons.js component (which Buttons.js receives from Canvas.js)
const ClearButton = (props) => {
    return (
      // calls the clearCanvas function that lives in the parent component Canvas.js
      <button className="button-style" onClick={props.onClick}>
        Clear
        <i class="far fa-trash-alt"></i>
      </button>
    );
};

export default ClearButton;