import React from "react";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';

const TuitListItem = ({tuit}) =>{
    const dispatch = useDispatch();
    const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
    };
    return (
        <div className="wd-suggested-post">
            <img className ="wd-avatar-photo"
                 src = {tuit.avatarImage}
                 alt = "avatar"/>

            <div className="wd-tweet-info-pos wd-author-font">
                {tuit.username}
                <span className ="ms-1 wd-handle-font">
                     @{tuit.handle} - {tuit.time}
                    </span>
            </div>

            <div className = "float-end">
                <i onClick={() =>
                    deleteTuit(tuit)}
                   className="fas fa-remove fa-2x
                        fa-pull-right"></i>
            </div>

            <div className ="mt-0 wd-body-text wd-tweet-info-pos">
                {tuit.tuit}
            </div>

            <img className ="wd-text-margin wd-postedImage-format"
                 src={tuit.video}
                 alt= "related to post"/>

            {tuit.postDetails ? <div className ="wd-article-box">
                    <p className ="wd-article-title">
                        {tuit.title}
                    </p>
                    <p className ="wd-article-words">
                        {tuit.postCaption}
                    </p>
                </div>
                : ""}
            <div className ="wd-author-font wd-icon-color wd-stats-container">

                <div>
                    <Link className ="wd-icon-color" to="#">
                        <i className ="fa fa-comment"></i> {tuit.comments}
                    </Link>
                </div>

                <div>
                    <Link className ="wd-icon-color" to="#">
                        <i className ="fa fa-retweet"></i> {tuit.retuits}
                    </Link>
                </div>


                <div className = "wd-heart-color">
                    <Link className = "wd-heart-color" to = "#">
                        <i className="fa fa-heart"></i> {tuit.likes}
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
export default TuitListItem;
