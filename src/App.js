import React from 'react';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
    <NextUIProvider>
  
    </NextUIProvider>
  
     <Routes>
     <Route path="/" element={ <Home/> } />
     <Route path="about" element={ <About/> } />
     
       
   </Routes>
   </>
  );
}

export default App;
