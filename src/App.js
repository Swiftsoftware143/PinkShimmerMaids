import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CityPage from './pages/CityPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/house-cleaning-brandon-fl" element={<CityPage />} />
          <Route path="/house-cleaning-tampa-fl" element={<CityPage />} />
          <Route path="/house-cleaning-st-petersburg-fl" element={<CityPage />} />
          <Route path="/house-cleaning-clearwater-fl" element={<CityPage />} />
          <Route path="/house-cleaning-lutz-fl" element={<CityPage />} />
          <Route path="/house-cleaning-wesley-chapel-fl" element={<CityPage />} />
          <Route path="/house-cleaning-riverview-fl" element={<CityPage />} />
          <Route path="/house-cleaning-valrico-fl" element={<CityPage />} />
          <Route path="/house-cleaning-seffner-fl" element={<CityPage />} />
          <Route path="/house-cleaning-plant-city-fl" element={<CityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
