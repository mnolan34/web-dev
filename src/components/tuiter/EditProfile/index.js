import React from "react";
import {useSelector} from "react-redux";
import EditProfileItem from "./edit-profile-item";
import '../HomeScreen/bookmarks.css';
import '../ExploreScreen/explore.css';


const EditProfileList = () => {
    const profiles = useSelector(
        state => state.profiles);
    return (
        <ul className="list-group">
            {profiles.map(profile => {
                return (
                    <EditProfileItem profile={profile}/>
                );
            })
            }
        </ul>
    );
}

export default EditProfileList;