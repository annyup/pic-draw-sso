import React, { Component } from "react";
import Buttons from './Buttons.js';
import firebase from "../firebase.js";
import swal from 'sweetalert';

class Canvas extends Component {
    constructor() {
        super();
        // if user is not drawing, it is set to false
        this.isDrawing = false;
        // canvas is referenced in the render html
        this.canvas = React.createRef();

        this.blank = null;

        // default width and height
        this.state = {
            width: 800,
            height: 600,
        };
    }

    componentDidMount() {
        this.ctx = this.canvas.current.getContext("2d");
        this.blank = this.canvas.current.toDataURL();
        this.updateResize();
        window.addEventListener("resize", this.updateResize.bind(this));
    }

    // when user starts start drawing
    startDrawing = ({nativeEvent}) => {
        this.isDrawing = true;
        this.handleDraw({nativeEvent})

        // for tablet & mobile users
        if (nativeEvent.type === "touchstart") {
            this.isDrawing = true;
        }
    }

    // handles the drawing
    // help from https://stackoverflow.com/questions/11287877/how-can-i-get-e-offsetx-on-mobile-ipad
    handleDraw = ({nativeEvent}) => {

        const currentPos = this.canvas.current.getBoundingClientRect();
        let offsetX = currentPos.left;
        let offsetY = currentPos.top;

        // shape of the stroke
        this.ctx.lineJoin = "round";
        this.ctx.lineCap = "round";

        let x;
        let y;

        // checks if user is drawing with mouse or touchscreen
        if(this.isDrawing) {
            if (nativeEvent.type === "mousemove") {
                x = parseInt(nativeEvent.clientX - offsetX);
                y = parseInt(nativeEvent.clientY - offsetY);
                
            // for tablet & mobile users
            } else if (nativeEvent.type === "touchmove") {
                const touch = nativeEvent.changedTouches[0];
                x = parseInt(touch.clientX - offsetX);
                y = parseInt(touch.clientY - offsetY);
            }

            this.ctx.lineTo(x, y);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
        }
    }

    // when user stops drawing
    stopDrawing = ({nativeEvent}) => {
        this.isDrawing = false;
        this.ctx.beginPath();
        this.ctx.closePath();
        // for tablet & mobile users
        if (nativeEvent.type === "touchend") {
            this.isDrawing = false;
            this.ctx.beginPath();
        }
    }

    // slider function for brush size
    brushSize = (size) => {
        this.ctx.lineWidth = size;
    }

    // changes color of the brush
    changeColor = (selectedColor) => {
        this.ctx.globalCompositeOperation = "source-over";
        this.ctx.strokeStyle = selectedColor;
    }

    // changes to an eraser
    useEraser = () => {
        this.ctx.globalCompositeOperation = "destination-out";
    }

    // clears the canvas
    clearCanvas = () => {
        this.ctx.clearRect(0, 0, this.state.width, this.state.height);
    };

    // checks if the canvas is blank or not
    // grab the URL of the image and save it to firebase
    saveCanvas = () => {

        const dataURL = this.canvas.current.toDataURL();

        if (dataURL == this.blank) {
            swal({
                text: "Please draw something!",
              });
        } else {
            const dbRef = firebase.database().ref();
            dbRef.push(dataURL);
            
            // clear the canvas when user has submitted their drawing
            this.clearCanvas();
    
            swal({
                text: "Your drawing has been saved! Go to the gallery to check it out!",
            });
        }

    }

    // resizes the canvas when inner width of window changes
    // help from https://www.hawatel.com/blog/handle-window-resize-in-react/
    updateResize = () => {
        if (window.innerWidth > 900) {
        this.setState({ width: 800, height: 600 });
        } else if (window.innerWidth <= 900 && window.innerWidth > 810) {
        this.setState({ width: 750, height: 500 });
        } else if (window.innerWidth <= 810 && window.innerWidth > 750) {
            this.setState({ width: 700, height: 500 });
        } else if (window.innerWidth <= 750 && window.innerWidth > 700) {
            this.setState({ width: 600, height: 500 });
        } else if (window.innerWidth <= 700 && window.innerWidth > 600) {
            this.setState({ width: 500, height: 500 });
        } else if (window.innerWidth <= 600 && window.innerWidth > 500) {
            this.setState({ width: 450, height: 500 });
        } else if (window.innerWidth <= 500 && window.innerWidth > 410) {
            this.setState({ width: 380, height: 500 });
        } else if (window.innerWidth <= 410 && window.innerWidth > 350) {
            this.setState({ width: 300, height: 500 });
        } else if (window.innerWidth <= 350) {
            this.setState({ width: 280, height: 500 });
        }
    };

    render () {
        return (
            <main className="wrapper">
                <section>
                    <div className="canvas-header">
                        <h1>Pic-draw-sso</h1>
                        <p className="p-styles">Are you the next Picasso? Use the buttons to get started on your art piece! Remember to hit the save button and press gallery to view!</p>
                    </div>
                    <div className="canvas-button-container">
                        <Buttons
                            colorFunction={this.changeColor}
                            brushFunction={this.brushSize}
                            eraserFunction={this.useEraser}
                            clearFunction={this.clearCanvas}
                            postFunction={this.saveCanvas}
                        />
                        <div className='canvas-container'>
                            <canvas
                                id='canvas-draw'
                                className='canvas'
                                ref={this.canvas}
                                width={this.state.width}
                                height={this.state.height}

                                onMouseDown={this.startDrawing}
                                onMouseUp={this.stopDrawing}
                                onMouseOut={this.stopDrawing}
                                onMouseMove={this.handleDraw}

                                onTouchStart={this.startDrawing}
                                onTouchMove={this.handleDraw}
                                onTouchEnd={this.stopDrawing}>
                            </canvas>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Canvas;