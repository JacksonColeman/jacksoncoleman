import { NavLink } from "react-router-dom";
import artInst from "../images/jc-art-inst.png";
import mcc from "../images/jc-mccormick.png";

export default function AboutMe(){

    return(
        <div className="aboutme">
            <img src={mcc} alt="me at the art institute" height="400px"/>
            <div className="about-text">
                <h2>About Me</h2>
                    <p>I'm a full-stack software engineer from Chicago, Illinois</p>
                    <p>I recently graduated from <NavLink to="/education">Colgate University</NavLink> 🎓</p>
                    <p>I have <NavLink to="/skills">experience</NavLink> in Python, Java, JavaScript, and more... 💻</p>
                    <p>I worked at <NavLink to="/experience">Wrigley Field</NavLink> 🐻</p>
                    <p>I wrote for the <NavLink to="/writing">oldest college weekly</NavLink> in America 🗞️</p>
                    <p>I built a <NavLink to="/projects">chess</NavLink> engine using React ♟️</p>
            </div>
        </div>
    )
}