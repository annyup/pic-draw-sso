// ClearButton.js

import React from "react";

const ClearButton = (props) => {
    return (
      <button className="button-style" onClick={props.onClick}>
        Clear
        <i class="far fa-trash-alt"></i>
      </button>
    );
};

export default ClearButton;