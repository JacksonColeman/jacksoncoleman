import logo from './logo.svg';
import './App.css';

// components
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Home from './components/Home';

// images
import artInst from "./jc-art-inst.png";
import fishingPic from "./fishing.jpeg"
import mcC from "./jc-mccormick.png"
import snowy from "./jc-snowy.jpeg"




function App() {
  return (
    <div>
      <Home/>
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;
