import React, { Component } from 'react';
import './App.css';
import Canvas from './components/Canvas.js';
import Gallery from './components/Gallery.js';
import { 
  HashRouter as Router, 
  Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          
          <Route exact path="/" component={Canvas}/>
          <Route path="/gallery" component={Gallery}/>

          <footer>
            <div className="wrapper">
              <p>Copyright © Anny Pham 2020</p>
            </div>
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;
