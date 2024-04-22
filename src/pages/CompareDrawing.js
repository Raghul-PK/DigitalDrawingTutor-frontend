import React, { useState, useEffect, useContext } from 'react';
import { ImageContext } from '../components/ImageContext';
import CompareButtonBox from "../components/CompareButtonBox";

import './CompareDrawing.css'

const CompareDrawing = () => {
    const {drawnImage, selectedImage} = useContext(ImageContext);

    useEffect(() => {
      console.log("Drawn Image");
      console.log(drawnImage);
    }, [drawnImage])

    return (
        <div className="compare-drawing-container">
          <div className="compare-drawing-image-container">
            {drawnImage && <img src={drawnImage} alt="Drawn Image" class="image1" />}
            <img src={selectedImage.src} alt="Selected Image" class="image2"  />
          </div>
          <CompareButtonBox/>
        </div>
    )
}

export default CompareDrawing;