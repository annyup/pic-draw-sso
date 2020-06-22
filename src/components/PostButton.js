// PostButton.js

import React, { Component } from 'react';

class PostButton extends Component {

    saveCanvas = () => {
        this.props.onClick();
    }

    render() {
        return (
            <button className="button-style" onClick={this.saveCanvas}>Save</button>
        )
    }
}


// const PostButton = (props) => {
//     return (
//       // calls the clearCanvas function that lives in the parent component Canvas.js
//       <button onClick={props.onClick}>Save</button>
//     );
// };

export default PostButton;