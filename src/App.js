import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import StartDraw from './pages/StartDraw'; 
import CompareDrawing from './pages/CompareDrawing';
import { ImageProvider } from './components/ImageContext';

function App() {
  return (
    <ImageProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeLayout/>} />
          <Route path="/start-draw" element={<StartDraw/>} />
          <Route path="/compare-draw" element={<CompareDrawing/>} />
        </Routes>
      </Router>
    </ImageProvider>
  );
}

export default App;
