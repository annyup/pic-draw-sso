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
              <p>Copyright © Anny Pham 2020 |
                <a href="https://annyup.com"><i class="fas fa-globe"></i></a>
                <a href="https://github.com/annyup/"><i class="fab fa-github"></i></a>
                <a href="https://twitter.com/annyup_"><i class="fab fa-twitter"></i></a>
              </p>
            </div>
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;
