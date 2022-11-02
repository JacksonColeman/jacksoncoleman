import Proj from "../styles/Projects.css"

export default function Projects(){
    return(
        <div className="projects">
            <h2>Projects</h2>
            <div className="projects-wrapper">
                <div className="project-item">
                    <h3>Fianchetto Chess | <a href="https://github.com/JacksonColeman/FianchettoChess" target="_blank">Github</a></h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LWDDIrQYTVc"/>
                    <p>I made Fianchetto Chess as my final project for the Flatiron School Software Engineering Bootcamp. It is a chess app with a fully functional and skilled Chess AI that you can play against, as well as other modes such as observing the AI vs. itself, AI vs. Random Moves, and Random vs. Random.</p>
                    <p>The Chess AI was built with a minimax algorithm with alpha-beta pruning. The Chess.js library was used for generation of legal moves and keeping track of the game state, and the React-Chessboard library was used to embed chessboards into the app and also to provide drag and drop move functionality.</p>
                    <p>The part of the app that I am most proud of is the AI Algorithm Visualizer, where the move tree that the computer is analyzing along with evaluations are displayed in a diagram while one plays against the computer.</p>
                    <p>Building this app was a great experience learning how chess computers work, and it is a project that I believe could always be improved and one that I plan to continue working on.</p>
                </div>
                <div className="project-item">
                    <h3>Catalogue Cinematica | <a href="https://github.com/JacksonColeman/CatalogueCinematica" target="_blank">Github</a></h3>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LWDDIrQYTVc"/>
                    <p>A helpful app to search films from OMDb API, get information about them, and add them to your watchlist.</p>
                    <p>This project was a collaborative one that I built at Flatiron School</p>
                    <p>My focus in the project was on the JavaScript functionality, and I restyled a personal version of the app, shown in the video.</p>

                </div>
            </div>
        </div>
    )
}