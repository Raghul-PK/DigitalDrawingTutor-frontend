import React, { useState, useContext } from 'react';
import {useNavigate } from 'react-router-dom'; // Import Navigate
import { ImageContext } from './ImageContext'; // Import ImageContext

const ImagePreviewer = () => {
  const { selectedImage, setProcessedImgPaths } = useContext(ImageContext);
  const [loading, setLoading] = useState(false);
  const [gridStatus, setGridStatus] = useState(false);
  const navigate = useNavigate();

  const toggleGridStatus = () => {
    if (gridStatus)
      setGridStatus(false);
    else
      setGridStatus(true);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedImage){
        alert("Please select an image to upload");
        return;
    }
    
    try {
        setLoading(true);

        const imageBlob = await fetch(selectedImage.src).then(response => response.blob());
        const formData = new FormData();
        formData.append('gridStatus', gridStatus);
        formData.append('image', imageBlob, `${selectedImage.id}_image.jpg`);
    
        fetch('http://localhost:5000/upload-image', {
          method: 'POST',
          body: formData
        })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to upload image');
          }
        })
        .then(data => {
          // console.log(data['image_url']);
          setProcessedImgPaths(data['image_url']);
          navigate('/start-draw')
        })
        .catch(error => {
          console.error('Error:', error);
        });
      } catch (error) {
        console.error('Error uploading image:', error);
      } finally {
        setLoading(false); // Reset loading state when upload is complete
      }
  };

  return (
    <div className="image-preview">
      {selectedImage && ( // Conditionally render preview only if an image is selected
        <>
            <img src={selectedImage.src} alt="Selected Image" />
            <div>
              <button type="button" disabled={!selectedImage || loading} onClick={handleSubmit}>
                {loading ? 'Uploading...' : 'Generate Step-by-Step Instructions'}
              </button>
              <button onClick={toggleGridStatus}>
                {gridStatus ? 'Grid ON' : 'Grid OFF'}
              </button>
            </div>
        </>
      )}
    </div>
  );
};

export default ImagePreviewer;
