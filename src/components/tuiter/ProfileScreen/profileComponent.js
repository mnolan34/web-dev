import React from "react";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import profileReducer from "../reducers/profile-reducer";

const Profile = ({profile}) => {
    const dispatch = useDispatch();
    const editProfile = (profile) => {
        dispatch({type: 'edit-profile', profile})
    }

    const reducer = combineReducers({
        profile: profileReducer
    })
    const store = createStore(reducer);

    return (
        <Provider store={store}>
            <div className="wd-suggested-post">
                <img className="wd-avatar-photo"
                     src={profile.profilePicture}
                     alt="avatar"/>

                <div className="wd-tweet-info-pos wd-author-font">
                    {profile.firstName} {profile.lastName}
                    <span className="ms-1 wd-handle-font">
                     @{profile.handle}
                    </span>
                </div>

                <div className="float-end">
                    <button onClick={() =>
                        editProfile(profile)}
                            className="btn btn-primary"> Edit Profile
                    </button>
                </div>

                <div className="mt-0 wd-body-text wd-tweet-info-pos">
                    {profile.location} {profile.dateOfBirth} {profile.dateJoined}
                </div>

                <div className="wd-author-font wd-icon-color wd-stats-container">

                    <div className="wd-heart-color">
                        <Link className="wd-heart-color" to="#">
                            <i className="fa fa-heart"></i> {profile.following} Following
                        </Link>
                    </div>

                    <div>
                        <Link className="wd-icon-color" to="#">
                            <i className="fa fa-share">
                                {profile.followers} Followers
                            </i>
                        </Link>
                    </div>
                </div>
            </div>
        </Provider>
        );
}
export default Profile;