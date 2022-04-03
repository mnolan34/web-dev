import React from "react";
import {createTuit, deleteTuit, findAllTuits} from "../../actions/tuits-action";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';

const TuitListItem = ({tuit}) =>{
    const dispatch = useDispatch();
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

            <i className = "fas fa-remove float-end"
               onClick={() => deleteTuit(
                   dispatch, tuit)}></i>


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
                    Likes: {tuit.stats.likes}
                    <i onClick={()=> updateTUit(dispatch, {
                        ...tuit,
                        likes: tuit.stats.likes + 1
                    })} className="far fa-thumbs-up ms-2"></i>
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
