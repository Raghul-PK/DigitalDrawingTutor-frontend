import React, { useState, useContext } from 'react';
import { ImageContext } from './ImageContext'; // Import ImageContext

const ImageGrid = () => {
  const { images, setSelectedImage } = useContext(ImageContext);
  const [filterKeyword, setFilterKeyword] = useState('');

  const filteredImages = images.filter(image =>
    image.keywords.some(keyword =>
      keyword.toLowerCase().includes(filterKeyword.toLowerCase())
    )
  );

  const onImageClick = (image) => {
    setSelectedImage(image); // Update selected image in context
  };

  return (
    <div className="image-grid-container">
      <input className="filter-input"
        type="text"
        placeholder="Filter by keyword (person, animal, vehicle, etc)"
        value={filterKeyword}
        onChange={(e) => setFilterKeyword(e.target.value)}
      />
      <div className="image-grid-showcase">
        {filteredImages.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Image ${image.id}`}
            onClick={() => onImageClick(image)}
            style={{ cursor: 'pointer' }}
            loading='lazy'
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
