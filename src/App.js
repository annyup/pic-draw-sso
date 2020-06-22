import React, { Component } from 'react';
import './App.css';
import Canvas from './components/Canvas.js';
import Gallery from './components/Gallery.js';
// import firebase from './firebase.js';

class App extends Component {

  render() {

    return (
      <div
        style = {{
          textAlign: 'center',
        }}>
        <header>
            <h1>pic-draw-sso</h1>
              <p>Can you be the next Picasso? Use the buttons on the side to get started on your art piece!</p>
        </header>
        <Canvas/>
        <Gallery/>
      </div>
    );
  }
}

export default App;
