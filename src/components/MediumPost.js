
export default function MediumPost({post}){

    function getText(html){
        // https://stackoverflow.com/questions/63574937/how-to-convert-html-string-into-plain-text-in-react
        var divContainer= document.createElement("div");
        divContainer.innerHTML = html;
        return divContainer.textContent || divContainer.innerText || "";
    }
    

    return (
        <div className="medium-post">
            <img src={post.thumbnail}/>
            <div className="medium-text">
                <h3><a href={post.guid} target="_blank">{post.title}</a></h3>
                <p >{`${getText(
                    post.description.substring(0, 230)
                )}...`}</p>
            </div>
        </div>
    )
}