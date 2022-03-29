import {Link} from "react-router-dom";
import React from "react";
const ProfileComponent = (profile) => {
    console.log(profile);
    return(
        <div className="list-group-item">
            <div className = "wd-suggested-post">

                <p className = "wd-banner-font">
                    <i className = "me-2 fas fa-arrow-left"></i>
                    {profile.profile.firstName} {profile.profile.lastName}
                </p>
                <p className = "wd-handle-font">
                    5, 128 tuits
                </p>
            </div>
            <img className = "wd-banner-image"
                 src = {profile.profile.bannerPicture}
                 alt = "banner"/>

            <img className="wd-avatar-photo"
                 src = {profile.profile.profilePicture}
                 alt = "avatar"/>
            <div className="wd-float-left">
                <div className="wd-font-gray ms-1"> @{profile.profile.handle} </div>
            </div>

            <div className = "d-inline-flex">
                <div className = "wd-font-white p-1">
                    {profile.profile.bio}
                </div>
            </div>

            <Link to = "/tuiter/editprofile">
                <button className="btn btn-primary wd-override-follow">
                    Edit Profile
                </button>
            </Link>

            <div className = "wd-stats-container">
                <div className = "wd-handle-font">
                        <i className ="fas fa-map-marker-alt"></i> {profile.profile.location}
                </div>

                <div className = "wd-handle-font">
                        <i className ="fas fa-birthday-cake"></i> Born {profile.profile.dateOfBirth}
                </div>


                <div className = "wd-handle-font">
                        <i className="fas fa-calendar-alt"></i> Joined {profile.profile.dateJoined}
                </div>
            </div>

        </div>
    )}

export default ProfileComponent;