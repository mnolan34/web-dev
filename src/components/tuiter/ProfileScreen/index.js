import React from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./profileComponent";
import '../HomeScreen/bookmarks.css';
import '../ExploreScreen/explore.css';


const ProfileList = () => {
    const profiles = useSelector(
        state => state.profiles);
    console.log(profiles);
    return (
            <ul className="list-group">

                {profiles.map(profile => {
                        return (
                            <ProfileComponent profile={profile}/>
                        );
                    })
                }
            </ul>
    );
}

export default ProfileList;