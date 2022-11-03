import educationCSS from "../styles/Education.css"
import grad from "../images/jc-grad.png"

export default function Education(){

    return(
        <div className="education">
            <h2>Education</h2>
            <div className="education-item">
                <img src={grad} width="200px"/>
                <div className="education-text">
                    <h3>Colgate University • Hamilton, NY</h3> 
                    <i>August 2018 - May 2022</i>
                    <h4>BA, Summa Cum Laude, in Political Science, Minor in Film & Media Studies</h4>
                    <h4>Cumulative GPA: 3.89/4.00</h4>
                    <h4>Relevant Coursework in Computer Science:</h4>
                    <li>Intro to Computing I</li>
                    <li>Data Structures I - (taken at DePaul University)</li>
                    <li>Discrete Structures</li>
                    <li>Data Structures and Algorithms</li>
                </div>
            </div>
            <div className="education-item">
                <img src="https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/flatiron_logo/original.png?1561667034"/>
                <div className="education-text">
                    <h3>Flatiron School • Remote</h3>
                    <i>July - October 2022</i>
                    <p>Full Stack Web Development Bootcamp focusing on JavaScript, React, and Ruby on Rails</p>
                    <p>Collaborated with peers on coding projects using GitHub</p>
                </div>
            </div>
        </div>
    )
}