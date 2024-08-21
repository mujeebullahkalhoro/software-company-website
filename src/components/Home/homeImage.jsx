import React from 'react';
import './homeImage.css';
import homeImage from '../assets/home-image.png';

export default function HomeImage() {
  return (
    <div className='image-Container'>
      <div>
        <img src={homeImage} alt="Home" />
      </div>
    </div>
  );
}
