import React from 'react';
import ImageGrid from '../components/ImageGrid';
import ImagePreviewer from '../components/ImagePreviewer';
import '../components/styles.css'; // Import your stylesheet

const HomeLayout = () => {
  const images = [
    // ... your image data
  ];

  return (
    <div className="home-layout">
      <ImagePreviewer />
      <ImageGrid images={images} />
    </div>
  );
};

export default HomeLayout;
