import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
);

reportWebVitals();
