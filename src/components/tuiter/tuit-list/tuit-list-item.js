import React from "react";
import {Link} from "react-router-dom";
const tuitListItem = ({
    homeTuits =
        {
            "_id": "123",
            "topic": "Web Development",
            "postedBy": {
                "username": "ReactJS"
                },
            "liked": true,
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            "attachments": {
                "video": "unKvMC3Y1kI"
            },
            "logo-image": "../../../images/react-blue.png",
            "avatarImage": "../../../images/react-blue.png",
            "stats": {
                "comments": 123,
                "retuits": 234,
                "likes": 345
            }
        }
    }) => {
    return (
        <div className="wd-suggested-post">
            <img className ="wd-avatar-photo"
                 src = {homeTuits.avatarImage}
                 alt = "avatar"/>

            <div className="wd-tweet-info-pos wd-author-font">
                {homeTuits.username}
                <span className ="ms-1 wd-handle-font">
                     @{homeTuits.handle} - {homeTuits.time}
                    </span>
            </div>

            <div className ="mt-0 wd-body-text wd-tweet-info-pos">
                {homeTuits.tuit}
            </div>

            <img className ="wd-text-margin wd-postedImage-format"
                 src={homeTuits.video}
                 alt= "related to post"/>

            {homeTuits.postDetails ? <div className ="wd-article-box">
                    <p className ="wd-article-title">
                        {homeTuits.title}
                    </p>
                    <p className ="wd-article-words">
                        {homeTuits.postCaption}
                    </p>
                </div>
                : ""}
            <div className ="wd-author-font wd-icon-color wd-stats-container">

                <div>
                    <Link className ="wd-icon-color" to="#">
                        <i className ="fa fa-comment"></i> {homeTuits.comments}
                    </Link>
                </div>

                <div>
                    <Link className ="wd-icon-color" to="#">
                        <i className ="fa fa-retweet"></i> {homeTuits.retuits}
                    </Link>
                </div>


                <div className = "wd-heart-color">
                    <Link className = "wd-heart-color" to = "#">
                        <i className="fa fa-heart"></i> {homeTuits.likes}
                    </Link>
                </div>

                <div>
                    <Link className = "wd-icon-color" to = "#">
                        <i className="fa fa-share"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default tuitListItem;
