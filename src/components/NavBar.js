import { NavLink } from "react-router-dom"
import navCSS from "../styles/Navbar.css"

export default function Navbar (){
    return(
        <nav className="navbar">
            <NavLink className="main" to="/">Jackson Coleman</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/writing">Writing</NavLink>
        </nav>
    )
}