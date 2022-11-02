import { NavLink } from "react-router-dom"

export default function Navbar ({user}) {
    return(
        <div className="navbar">
            <NavLink className="main" to="/">Jackson Coleman</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/writing">Writing</NavLink>
        </div>
    )
}