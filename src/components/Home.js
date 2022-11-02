// images
import artInst from "../jc-art-inst.png";
import fishingPic from "../fishing.jpeg"
import mcC from "../jc-mccormick.png"
import snowy from "../jc-snowy.jpeg"

import AboutMe from "./AboutMe";
import Contact from "./Contact";

export default function Home(){

    return(
    <div className="Home">
        <h1 className="header">Jackson Coleman</h1>
        <h2>Full-Stack Software Engineer</h2>
        {/* <img src={mcC} alt="me at the art institute" height="250px"/>
        <img src={fishingPic} alt="me at the art institute" height="250px"/>
        <img src={snowy} alt="me at the art institute" height="250px"/> */}
        <AboutMe/>
        <Contact/>
    </div>)
}