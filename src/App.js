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



function App() {
  return (
    <div>
      <NavBar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/education" element={<Education/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/writing" element={<Writing/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
