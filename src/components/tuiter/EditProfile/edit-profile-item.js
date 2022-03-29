import {Link} from "react-router-dom";
import React from "react";

const EditProfileItem = (profile) => {
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
            <Link to = "/tuiter/profile">
                <button className="btn btn-danger wd-override-follow float-end">
                    Save
                </button>
            </Link>

            <img className = "wd-banner-image"
                 src = {profile.profile.bannerPicture}
                 alt = "banner"/>

            <img className="wd-avatar-photo"
                 src = {profile.profile.profilePicture}
                 alt = "avatar"/>

            <div className="list-group-item">
                <textarea className = "wd-input-bar">
                    {profile.profile.firstName}
                </textarea>
            </div>

            <div className = "list-group-item">
                <textarea className = "wd-input-bar">
                    {profile.profile.bio}
                </textarea>
            </div>

            <div className = "list-group-item">
                <textarea className = "wd-input-bar">
                    {profile.profile.location}
                </textarea>
            </div>

            <div className = "list-group-item">
                <textarea className = "wd-input-bar">
                    {profile.profile.website}
                </textarea>
            </div>


        </div>
    )}

export default EditProfileItem;