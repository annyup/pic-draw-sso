import React, { Component } from "react";
import Buttons from './Buttons.js';
import firebase from "../firebase.js";
import swal from 'sweetalert';

class Canvas extends Component {
    constructor() {
        super();

        this.isDrawing = false;

        this.canvas = React.createRef();

        this.state = {
            width: 800,
            height: 600,
        };
    }

    // resizes when inner width of window changes
    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize.bind(this));
        this.ctx = this.canvas.current.getContext("2d");
    }

    handleResize = () => {
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

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize.bind(this));
    }

    // start & stop drawing functions
    startDrawing = ({nativeEvent}) => {
        this.isDrawing = true;
        this.draw({nativeEvent})

        // for tablet & mobile users
        if (nativeEvent.type === "touchstart") {
            this.isDrawing = true;
            const touch = nativeEvent.touches[0];
            this.swipe = {
              x: touch.clientX,
              y: touch.clientY,
            };
        }
    }

    draw = ({nativeEvent}) => {

        const {offsetX, offsetY} = nativeEvent;

        this.ctx.lineJoin = "round";
        this.ctx.lineCap = "round";
        let mouseX = offsetX;
        let mouseY = offsetY;

        if (nativeEvent.type === "mousemove" && this.isDrawing) {
            this.ctx.lineTo(mouseX, mouseY);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(mouseX, mouseY);
        // for tablet & mobile users
        } else if (nativeEvent.type === "touchmove" && this.isDrawing) {
            const touch = nativeEvent.changedTouches[0];
            let touchX = parseInt(touch.clientX - offsetX);
            let touchY = parseInt(touch.clientY - offsetY);

            this.ctx.lineTo(touchX, touchY);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(touchX, touchY);
        }
    }

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

    // clears the canvas
    clearCanvas = () => {
        this.ctx.clearRect(0, 0, this.state.width, this.state.height);
    };

    // changes color of the brush
    changeColor = (selectedColor) => {
        this.ctx.strokeStyle = selectedColor;
    }

    // changes to an eraser
    useEraser = (selectedEraser) => {
        this.ctx.strokeStyle = selectedEraser;
    }

    // grab the URL of the image and save it to firebase
    saveCanvas = () => {
        const dataURL = this.canvas.current.toDataURL();
        console.log(dataURL);

        const dbRef = firebase.database().ref();
        dbRef.push(dataURL);
        
        // clear the canvas when user has submitted their drawing
        this.clearCanvas();

        swal({
            text: "Your drawing has been saved! Go to the gallery to check it out!",
          });
    }

    render () {
        return (
            <main className="wrapper">
                <section>
                    <div className="canvas-header">
                        <h1>Pic-draw-sso</h1>
                        <p>Are you the next Picasso? Use the buttons on the side to get started on your art piece! Remember to hit the save button and press gallery to view!</p>
                    </div>
                    <div className="canvas-button-container">
                        <Buttons
                            colorFunction={this.changeColor}
                            clearFunction={this.clearCanvas}
                            eraserFunction={this.useEraser}
                            postFunction={this.saveCanvas}
                            id="slider" brushSize={this.brushSize}
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
                                onMouseMove={this.draw}
                                onTouchStart={this.startDrawing}
                                onTouchMove={this.draw}
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