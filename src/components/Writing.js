import writingCSS from "../styles/Writing.css"
import MediumPost from "./MediumPost"
import { useState } from "react"

export default function Writing(){
    // fetch medium posts from API

    const [posts, setPosts] = useState([])

    let mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jackson-coleman-tech"
    fetch(mediumURL)
    .then(r => r.json())
    .then(r => setPosts(r.items))

    return(
        <div className="writing">
            <h2>My Blog Posts On Medium</h2>
            {posts.map(post => <MediumPost post={post}/>)}
            <p id="maroon-plug">Check out my writing for the Colgate Maroon-News, the oldest college weekly in America <a href="https://thecolgatemaroonnews.com/staff_name/jackson-coleman/" target="_blank">here!</a></p>
        </div>
    )
}