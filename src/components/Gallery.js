// Gallery.js

import React, { Component } from 'react';
import firebase from '../firebase.js';

// retrieve image strings from the database and store it in an array
// loop through the array of image strings, and append an img element to the page, with the strings as their url's

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      drawingsArray: [],
    }        
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    // retrieve saved drawings from the database and save them as an array in the component state
    dbRef.on('value', (response) => {
      // fetches data from the database as objects
      const dataFromDb = response.val();

      // stores base64 image strings from the database
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
      <div className="gallery">
        <h2>Gallery</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit assumenda repellat officiis. Ipsum, soluta aperiam?</p>

        {
          <div className="gallery-grid">
            {this.state.drawingsArray.map((item) => {
              return (
                <div className="userDrawing">
                  <img src={item.drawingUrl}></img>
                </div>
              )
            })}
          </div>
        }
        
      </div>
    );
  }
}

export default Gallery;