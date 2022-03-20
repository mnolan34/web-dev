import React from "react";
const HomeScreenItem = (homeTuits) => {
    return (
            <div className="wd-suggested-post">
                <img className ="wd-avatar-photo"
                     alt = {homeTuits.avatarImage} />
                
                <div className="wd-tweet-info-pos wd-author-font">
                    {homeTuits.screenName}
                    <span className ="wd-handle-font">
                        {homeTuits.handle} - {homeTuits.time}
                    </span>
                </div>
                
                <div className ="mt-0 wd-body-text wd-tweet-info-pos">
                    {homeTuits.caption}
                </div>
                
                <img className ="wd-text-margin wd-image-post"
                     src={homeTuits.postPhoto}/>

                {homeTuits.postDetails ? `<div class ="wd-article-box">
                    <p class ="wd-article-title">
                        {homeTuits.postTitle}
                    </p>
                    <p class ="wd-article-words">
                        {homeTuits.postCaption}
                    </p>
                </div>
                `: ""}
                <div className ="wd-author-font wd-icon-color wd-stats-container">

                    <div>
                        <a className ="wd-icon-color" href="#">
                            <i className ="fa fa-comment"></i> {homeTuits.comments}
                        </a>
                    </div>

                    <div>
                        <a className ="wd-icon-color" href="#">
                            <i className ="fa fa-retweet"></i> {homeTuits.retuits}
                        </a>
                    </div>
                    

                    <div className = "wd-heart-color">
                        <a className = "wd-heart-color" href = "#">
                            <i className="fa fa-heart"></i> {homeTuits.likes}
                        </a>
                    </div>

                    <div>
                        <a className = "wd-icon-color" href = "#">
                            <i className="fa fa-share"></i>
                        </a>
                    </div>
                </div>
            </div>
    )
}
export default HomeScreenItem;
