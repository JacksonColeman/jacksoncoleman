import experienceCSS from "../styles/Experience.css"

import mjc from "../images/mjc-interns.jpeg"
import cubs from "../images/jc-cubs.png"
import mcC from "../images/jc-mccormick.png"
import persson from "../images/jc-persson.JPG"

export default function Experience(){

    return(
        <div className="experience">
            <h2>Experience</h2>
            <div className="job-item">
                <img src={mjc} width="240px"/>
                <div className="job-text">
                    <h3>Student Intern @ the MacArthur Justice Center</h3> 
                    <i>Summer 2021</i>
                    <p>Assisted attorneys and paralegals with cases dealing with wrongful convictions and police misconduct.</p>
                    <p>Attended virtual depositions and listened to hundreds of hours of prison phone calls to gather evidence
surrounding a wrongful imprisonment case.</p>
                </div>
            </div>
            <div className="job-item">
                <img src={persson} height="180px" width="240px"/>
                <div className="job-text">
                    <h3>Independent Research in Political Science @ Colgate University</h3>
                    <i>Summer 2020</i>
                    <p>Researched Bolivian political economy and trade policy concluding that Bolivian economic policies were
effective for increasing quality of life and provide a model for alter-neoliberal policy in the Global South</p>
                    <p>Used tools such as MAXQDA for qualitative data analysis and R for data visualization.</p>
                </div>
            </div>
            <div className="job-item">
                <img src={cubs} height="180px" width="240px"/>
                <div className="job-text">
                    <h3>Facilities Crew @ Wrigley Field</h3>
                    <i>Summer 2019</i>
                    <p>Delivered best-in-class fan experiences by preparing Wrigley Field for games and events; maintained clean
concourses; interacted with and assisted fans on game and event days</p>
                </div>
            </div>
        </div>
    )
}