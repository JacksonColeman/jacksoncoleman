import skillsCSS from "../styles/Skills.css"
import fishing from "../images/jc-fishing.png"

export default function Skills(){

    return(
        <div className="skills">
            <h2>Skills</h2>
            <div className="skills-content">
                <img src={fishing} height="400px"/>
                <div className="list-with-header">
                    <h3>I have experience with...</h3>
                    <ul>
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Ruby on Rails</li>
                        <li>SQL</li>
                        <li>Git</li>
                        <li>R Programming Language</li>
                    </ul>
                    <ul>
                        <li>Fishing</li>
                        <li>Acoustic Guitar</li>
                        <li>Fantasy Football</li>
                    </ul>
                </div>
            </div>
            <p id="see-resume">See my full resume <a href="https://drive.google.com/file/d/1bg0eYJDH9ZeA1ngx_wq1sDrVFvcIvtBh/view?usp=sharing" target="_blank">here!</a></p>
        </div>
    )
}