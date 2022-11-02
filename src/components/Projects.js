import Proj from "../styles/Projects.css"

export default function Projects(){
    return(
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects-wrapper">
                <div className="project-item">
                    <h3>Fianchetto Chess | <a href="https://github.com/JacksonColeman/FianchettoChess">Github</a></h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LWDDIrQYTVc"/>
                    <p>I created this project...</p>
                </div>
                <div className="project-item">
                    <h3>Catalogue Cinematica | <a href="https://github.com/JacksonColeman/CatalogueCinematica">Github</a></h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LWDDIrQYTVc"/>
                    <p>I created this project...</p>
                </div>
            </div>
        </div>
    )
}