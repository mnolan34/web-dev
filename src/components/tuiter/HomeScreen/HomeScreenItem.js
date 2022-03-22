import React from "react";
import {Link} from "react-router-dom";
const HomeScreenItem = (
    {
        homeTuits = {
            "avatarImage": "https://www.cnet.com/a/img/PKiQZMbbp8EyG6ma75Xl9-rgznc=/940x0/2018/09/18/e882c199-6ab8-45dc-bf7a-52d36e56c520/bfrlaunch.jpg",
            "screenName": "lon Musk",
            "handle": "@elonmusk",
            "time": "3h",
            "caption": "Amazing show about @inspiration4x mission!",
            "postPhoto": "https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSTVj5DHrlahOykYCHrcwL63gTkGzcXodPQgvrJXFqQMFg4Ktgtxmh_fGFJbsMF9BwmIbdW4L17YdJejrxJNwqyEnAP-.jpg?r=3d5",
            "postDetails": true,
            "postTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "postCaption": "From training to launch to landing, this all access docuseries rides along with the Inspiration4 crew on the first all civilian orbital space..",
            "postLink": "netflix.com",
            "comments": "4.2k",
            "retuits": "3.5k",
            "likes": "37.5k"
        }
    }) => {

    return (
            <div className="wd-suggested-post">
                <img className ="wd-avatar-photo"
                     src = {homeTuits.avatarImage}
                    alt = "avatar"/>
                
                <div className="wd-tweet-info-pos wd-author-font">
                    {homeTuits.screenName}
                    <span className ="wd-handle-font">
                        {homeTuits.handle} - {homeTuits.time}
                    </span>
                </div>
                
                <div className ="mt-0 wd-body-text wd-tweet-info-pos">
                    {homeTuits.caption}
                </div>
                
                <img className ="wd-text-margin wd-postedImage-format"
                     src={homeTuits.postPhoto}
                    alt= "related to post"/>

                {homeTuits.postDetails ? <div className ="wd-article-box">
                    <p className ="wd-article-title">
                        {homeTuits.postTitle}
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
export default HomeScreenItem;
