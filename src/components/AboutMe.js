import artInst from "../jc-art-inst.png";

export default function AboutMe(){

    return(
        <div className="aboutme">
            <img src={artInst} alt="me at the art institute" height="400px"/>
            <div className="about-text">
                <h2>About Me</h2>
                    <p>I'm a full-stack software engineer from Chicago, Illinois</p>
                    <p>I recently graduated from <a href="/education">Colgate University</a> 🎓</p>
                    <p>I have <a href="/skills">experience</a> in Python, Java, JavaScript, and more... 💻</p>
                    <p>I worked at <a href="/experience">Wrigley Field</a> 🐻</p>
                    <p>I wrote for the <a href="/writing">oldest college weekly</a> in the country 🗞️</p>
                    <p>I built a <a href="/projects">chess</a> engine using React ♟️</p>
            </div>
        </div>
    )
}