import React, {useState, useContext} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import IconButton from '@mui/material/IconButton';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import { ImageContext } from '../components/ImageContext'; // Import ImageContext

export default function CompareButtonBox() {
  const {drawnImage, setDrawnImageFunc } = useContext(ImageContext);
  const [compareMode, setCompareMode] = useState('');

  const handleCameraClick = () => {
    // Add your logic for handling button click here
    alert('Camera button clicked');
  };

  const handleCompareChange = (event) => {
    setCompareMode(event.target.value);
    console.log(compareMode);
  };

  const handleImageChange  = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setDrawnImageFunc(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    console.log(drawnImage);
  };
  
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <div>
        <IconButton onClick={handleCameraClick}>
        <PhotoCameraIcon />
        </IconButton>
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
            style={{margin:"8px", height:"38px"}}
        >
            Upload Drawing
            <VisuallyHiddenInput type="file" onChange={handleImageChange} />
        </Button>
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Compare</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={compareMode}
                label="Compare"
                onChange={handleCompareChange}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
                <MenuItem value={'overlap'}>Overlap</MenuItem>
                <MenuItem value={'side-side'}>Side-Side</MenuItem>
            </Select>
        </FormControl>
    </div>
  );
}
