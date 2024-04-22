import React, { useState, useEffect, useContext } from 'react';
import { ImageContext } from '../components/ImageContext';
import '../components/styles.css'; // Import your stylesheet

import {useNavigate } from 'react-router-dom'; // Import Navigate

const StartDraw = () => {
    const {processedImgPaths} = useContext(ImageContext);
    const [curImageIndex, setCurImageIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState('');
    
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/get_image/${encodeURIComponent(processedImgPaths[curImageIndex])}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch image');
                }
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                setImageSrc(url);
            } catch (error) {
                console.error('Error fetching image:', error);
            } finally {
                // setIsLoading(false);
            }
        };

        fetchData();
    }, [curImageIndex, processedImgPaths]);

    const handlePrevClick = () => {
        setCurImageIndex(curImageIndex-1);
    };

    const handleNextClick = () => {
        setCurImageIndex(curImageIndex+1);
    };

    // Check if the current index is out of bounds
    const prevDisabled = curImageIndex <= 0;
    const nextDisabled = curImageIndex >= processedImgPaths.length - 1;

    return (
        <div className="start-draw">
            <button onClick={handlePrevClick} disabled={prevDisabled}>Prev</button>
            <div className="start-draw-center">
                {imageSrc && <img src={imageSrc} alt="Image from Flask Server"/>}
                {nextDisabled &&  
                    <div>
                        <button onClick={() => navigate('/')}>Go back Home</button>
                        <button onClick={() => navigate("/compare-draw")}>Compare drawings</button>
                    </div>
                }
            </div>
            <button onClick={handleNextClick} disabled={nextDisabled}>Next</button>
        </div>
    )
}

export default StartDraw;