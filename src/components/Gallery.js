// Gallery.js

import React, { Component } from 'react';
import firebase from '../firebase.js';

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
      <div className="wrapper">
        <h2>Gallery</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit assumenda repellat officiis. Ipsum, soluta aperiam?</p>

        {
          <div className="gallery-grid">
            {this.state.drawingsArray.map((item) => {
              return (
                <div className="user-drawing">
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