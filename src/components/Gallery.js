// Gallery.js

import React, { Component } from 'react';
import firebase from '../firebase.js';
import { Link } from 'react-router-dom';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      drawingsArray: [],
    }        
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    // pulls drawings from firebase db and saves them in an array
    dbRef.on('value', (response) => {
      const dataFromDb = response.val();

      const arrayFromDb = [];

      // push each drawing into arrayFromDb array
      for (let key in dataFromDb) {
        arrayFromDb.push({
            drawingUrl: dataFromDb[key],
        })
      }

      this.setState ({
        drawingsArray: arrayFromDb,
      })
    })
  }

  render() {
    return (
      <div>
        <div className="app-button">
          <Link to="/">
            <button className="button-style">
              back
              <i class="fas fa-palette"></i>
            </button>
          </Link>
        </div>

        <div className="wrapper">
          <h1>Gallery</h1>
          <p className="p-styles">Here is yours and other users' master piece! Take a look!</p>

          {
            <div className="gallery-grid">
              {this.state.drawingsArray.map((item) => {
                return (
                  <div className="user-drawing">
                    <img src={item.drawingUrl} alt="Canvas drawing by a user"></img>
                  </div>
                )
              })}
            </div>
          }
      </div>
      </div>             
    );
  }
}

export default Gallery;