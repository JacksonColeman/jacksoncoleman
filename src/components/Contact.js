import resume from "../JacksonColemanResume.pdf"
import { faLinkedin, faGithub, faTwitter, f } from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export default function Contact(){

    return(
        <div className="contact">
            <div className="contact-links">
                <a href="mailto:wjacksoncoleman@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/jackson-coleman/" target="_blank">LinkedIn</a>
                <i> <FontAwesomeIcon icon={faLinkedin}/></i>
                <a href="https://www.github.com/jacksoncoleman/" target="_blank">Github</a>
                <i> <FontAwesomeIcon icon={faGithub}/></i>
                <a href="https://www.twitter.com/soulinthegame" target="_blank">Twitter</a>
                <i> <FontAwesomeIcon icon={faTwitter}/></i>
                <a href="https://drive.google.com/file/d/1bg0eYJDH9ZeA1ngx_wq1sDrVFvcIvtBh/view?usp=sharing" target="_blank">Resume</a>
            </div>
        </div>
    )
}