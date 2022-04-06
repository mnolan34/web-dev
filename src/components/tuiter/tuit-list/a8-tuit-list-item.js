import React from "react";
import {updateTuit, deleteTuit} from "../../actions/tuits-action";
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
                {tuit.username || tuit.postedBy.username}
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


            <div className ="wd-author-font wd-icon-color wd-stats-container">

                <div className = "wd-font-white">
                    Likes: {tuit.likes}
                    <i onClick={()=> updateTuit(dispatch, {
                        ...tuit,
                        likes: tuit.likes + 1
                    })} className="far fa-thumbs-up ms-2"></i>
                </div>

                <div className = "wd-font-white">
                    Dislikes: {tuit.dislikes}
                    <i onClick={()=> updateTuit(dispatch, {
                        ...tuit,
                        dislikes: tuit.dislikes + 1
                    })} className="far fa-thumbs-down ms-2"></i>
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
