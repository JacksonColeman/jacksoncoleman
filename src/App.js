import logo from './logo.svg';
import './App.css';

// components
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Home from './components/Home';
import NavBar from './components/NavBar';

// images
import artInst from "./jc-art-inst.png";
import fishingPic from "./fishing.jpeg"
import mcC from "./jc-mccormick.png"
import snowy from "./jc-snowy.jpeg"

import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <NavBar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
