import React, { Component } from 'react';
import './App.css';
import Canvas from './components/Canvas.js';
import Gallery from './components/Gallery.js';
import { 
  BrowserRouter as Router, 
  Route, Link } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
      <div
        style = {{
          textAlign: 'center',
        }}>

        <header>
            <h1>Pic-draw-sso</h1>
              <p>Can you be the next Picasso? Use the buttons on the side to get started on your art piece!</p>
        </header>
        <Route exact path="/" component={Canvas} />
        {/* <Canvas/> */}
          <Link to="/gallery">Gallery</Link>
          <Route path="/gallery" component={Gallery}/>
        {/* <Gallery/> */}

        <footer>
          <p>Copyright © Anny Pham 2020</p>
        </footer>
      </div>
        </Router>
    );
  }
}

export default App;
