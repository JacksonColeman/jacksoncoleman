import logo from './logo.svg';
import './App.css';

// components
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Writing from './components/Writing';

// images
import artInst from "./images/jc-art-inst.png";
import fishingPic from "./images/jc-fishing.png"
import mcC from "./images/jc-mccormick.png"
import snowy from "./images/jc-snowy.jpeg"

import { Routes, Route } from 'react-router-dom';
import {useEffect, useState} from 'react';


function App() {
  // for conditional css
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // 👇 add class to body element
    if (darkMode){
      document.body.classList.add('dark');
    } else if (document.body.classList.contains('dark')){
      document.body.classList.remove('dark');
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

    // 👇️ adding multiple classes to body tag
  return (
    <div className='app'>
      <NavBar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/jacksoncoleman" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/writing" element={<Writing/>}/>
        </Routes>
        <div className='button-container'>
          <button onClick={toggleDarkMode}>{darkMode ? "Light Mode" : "Dark Mode"}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
