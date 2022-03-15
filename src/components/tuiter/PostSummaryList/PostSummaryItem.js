import React from "react";

const PostSummaryItem = (
    {
        post =
            {
                "topic": "Web Development",
                "userName": "ReactJS",
                "time": "2h",
                "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                "image": "../../../images/react-blue.png"
            }
    }) => {
    return(
    <div className = "list-group-item">
        <div className = "wd-suggested-post mb-2 wd-flex-container">
            <div className = "mt-1 ms-1">
                <div className = "wd-trending-font">{post.topic}</div>

                <div>
                   {post.userName}
                    <i className ="fa fa-check-circle"></i> 
                    <span className = "wd-trending-font"> {post.time}</span>
                </div>

                <div>
                    {post.title} 
                </div>
                
                
                ${post.tweets ? `
                <div className = "wd-trending-font">
                     {post.tweets }
                 </div>
                `: ""}
            </div>
            
            <div>
                 <img className = "mt-1 mb-1 me-1 wd-image-format"
                      src = {post.image}/>
             </div>
        </div>
    </div>
    );
}

export default PostSummaryItem;