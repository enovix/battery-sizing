import React from 'react';
import BatterySizing from './components/ui/BatterySizing';
import SolarSizing from './components/ui/SolarSizing'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import Footer from './components/ui/Footer';
import Notes from './components/ui/Notes';

export default function App() {
  return (
    <div className="appLayout">
      <BrowserRouter basename='/ets'>
        <NavBar />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<BatterySizing />} />
            <Route path="/battery-sizing" element={<BatterySizing />} />
            <Route path='/solar-sizing' element={<SolarSizing/>} />
            <Route path="/notes" element={<Notes />} />
            {/* Add more routes here as needed */}
          </Routes>
        </div>
        <div className="appFooter">
          <Footer />
        </div>

      </BrowserRouter>
    </div>
  );
}
