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
                {tuit.postedBy.username}
                <span className ="ms-1 wd-handle-font">
                     @{tuit.handle} - {tuit.time}
                    </span>
            </div>

            <div className = "float-end">
                <button onClick={() =>
                    deleteTuit(tuit)}
                   className="fas fa-remove fa-2x
                        fa-pull-right"></button>
            </div>

            <div className ="mt-0 wd-body-text wd-tweet-info-pos">
                {tuit.tuit}
            </div>

            {tuit.video ? <div className ="wd-article-box">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xL7RW5NSyJM"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>

                    </iframe>
                </div>
                : ""}


            <div className ="wd-author-font wd-icon-color wd-stats-container">

                <div>
                    <Link className ="wd-icon-color" to="#">
                        <i className ="fa fa-comment"></i> {tuit.stats.comments}
                    </Link>
                </div>

                <div>
                    <Link className ="wd-icon-color" to="#">
                        <i className ="fa fa-retweet"></i> {tuit.stats.retuits}
                    </Link>
                </div>


                <div className = "wd-heart-color">
                    <Link className = "wd-heart-color" to = "#">
                        <i className="fa fa-heart"></i> {tuit.stats.likes}
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
