import React from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./profileComponent";
import '../HomeScreen/bookmarks.css';
import '../ExploreScreen/explore.css';

const ProfileList = () => {
    const profile = useSelector(
        state => state.profile);
    return (
        <ul className="list-group">

            {
                profile && profile.map && profile.map(tuit =>
                    <ProfileComponent key={profile._id}
                                  profile={profile}/>)
            }
        </ul>
    );
}

export default ProfileList;