import {Link} from "react-router-dom";
import React, {useState} from "react";

const EditProfileItem = () => {
    const [profile, setProfile] = useState({profile: ''});
    console.log(profile);
    const nameChangeHandler = (event) => {
        const newValue = event.target.value;
        const newName = {
            firstName: newValue
        };
        setProfile(newName);
    }

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

            <div className=" wd-flex-container list-group-item">
                Name
                <div>
                    <textarea
                        onChange={nameChangeHandler}
                        value={profile.profile.firstName}
                        className = "form-control wd-input-bar">
                        {profile.profile.firstName}
                    </textarea>
                </div>
            </div>

            <div className = "wd-flex-container list-group-item">
                Bio
                <div>
                    <textarea className = "wd-input-bar">
                        {profile.profile.bio}
                    </textarea>
                </div>
            </div>

            <div className = "wd-flex-container list-group-item">
                Location
                <div>
                    <textarea className = "wd-input-bar">
                        {profile.profile.location}
                    </textarea>
                </div>
            </div>

            <div className = "wd-flex-contatiner list-group-item">
                Website
                <div>
                    <textarea className = "wd-input-bar">
                        {profile.profile.website}
                    </textarea>
                </div>
            </div>


        </div>
    )}

export default EditProfileItem;