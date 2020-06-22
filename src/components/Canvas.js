import React, { Component } from "react";
import Buttons from './Buttons.js';
import firebase from "../firebase.js";

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

        this.ctx = this.canvas.current.getContext("2d");
        const {offsetX, offsetY} = nativeEvent;

        this.ctx.lineJoin = "round";
        this.ctx.lineCap = "round";
        let mouseX = offsetX;
        let mouseY = offsetY;
            if (this.isDrawing) {
            this.ctx.lineTo(mouseX, mouseY);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(mouseX, mouseY);
        }
    }

    stopDrawing = () => {
        this.isDrawing = false;
        this.ctx.beginPath();
        this.ctx.closePath();
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
    }

    // grab data from firebase and display it in gallery
    // viewGallery = () => {

    // }

    render () {
        return (
            <main className="wrapper">
                <Buttons
                    colorFunction={this.changeColor}
                    clearFunction={this.clearCanvas}
                    eraserFunction={this.useEraser}
                    postFunction={this.saveCanvas}
                    id="slider" brushSize={this.brushSize}
                />
                <div className = 'canvas-container'>
                    <canvas
                        id = 'canvas-draw'
                        className = 'canvas'
                        ref = {this.canvas}
                        width = {this.state.width}
                        height = {this.state.height}
                        onMouseDown = {this.startDrawing}
                        onMouseUp = {this.stopDrawing}
                        onMouseOut = {this.stopDrawing}
                        onMouseMove = {this.draw}>
                    </canvas>
                </div>
             </main>
        );
    }
}

export default Canvas;