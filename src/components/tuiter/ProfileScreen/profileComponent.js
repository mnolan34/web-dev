import React from "react";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';

const ProfileComponent = ({profile}) => {
    const dispatch = useDispatch();
    const editProfile = () => {
        dispatch({type: 'edit-profile', profile});
    };

    return (
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
        );
}
export default ProfileComponent;