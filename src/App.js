import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import 'react-horizontal-scrolling-menu/dist/styles.css';


import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => (
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    <Footer />
  </Box>
);

export default App;