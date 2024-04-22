import React, { createContext, useState } from 'react';

const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([
    { id: 1, src: '/images/1.jpg', keywords: [''] },
    { id: 2, src: '/images/2.jpg', keywords: [''] },
    { id: 3, src: '/images/3.jpg', keywords: ['vehicle'] },
    { id: 4, src: '/images/4.jpg', keywords: [''] },
    { id: 5, src: '/images/5.jpg', keywords: ['person'] },
    { id: 6, src: '/images/6.jpg', keywords: ['person'] },
    { id: 7, src: '/images/7.jpg', keywords: [''] },
    { id: 8, src: '/images/8.jpg', keywords: ['animal'] },
    { id: 9, src: '/images/9.jpg', keywords: ['animal'] },
    { id: 10, src: '/images/10.jpg', keywords: ['animal'] },
    { id: 11, src: '/images/11.jpg', keywords: [''] },
    { id: 12, src: '/images/12.jpg', keywords: [''] },
    { id: 13, src: '/images/13.jpg', keywords: ['animal'] },
    { id: 14, src: '/images/14.jpg', keywords: ['animal'] },
    { id: 15, src: '/images/15.jpg', keywords: ['person'] },
    { id: 16, src: '/images/16.jpg', keywords: ['animal'] },
    { id: 17, src: '/images/17.jpg', keywords: ['vehicle'] },
    { id: 18, src: '/images/18.jpg', keywords: ['animal'] },
    { id: 19, src: '/images/19.jpg', keywords: ['animal'] },
    { id: 20, src: '/images/20.jpg', keywords: ['person'] },
  ]);

  const [selectedImage, setSelectImage] = useState(null);
  const setSelectedImage = (image) => {
    setSelectImage(image);
  };

  const [processedImgPaths, setProcessedImg] = useState([]);
  const setProcessedImgPaths = (img_paths) => {
    setProcessedImg(img_paths);
  };

  const [drawnImage, setDrawnImage] = useState(null);
  const setDrawnImageFunc = (image) => {
    setDrawnImage(image);
  };

  const value = { images, selectedImage, setSelectedImage, processedImgPaths, setProcessedImgPaths, drawnImage, setDrawnImageFunc };

  return (
    <ImageContext.Provider value={value}>
      {children}
    </ImageContext.Provider>
  );
};

// Custom hook to consume ImageContext
export { ImageContext, ImageProvider };
