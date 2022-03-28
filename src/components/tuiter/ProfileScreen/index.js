import React, {useState} from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./profileComponent";
import '../HomeScreen/bookmarks.css';
import '../ExploreScreen/explore.css';

const ProfileList = () => {
    const [profile, setProfile] = useState(profile);
    const profiles = useSelector(
        state => state.profiles);
    return (
            <ul className="list-group">
                {
                    profiles.map && profiles.map(profile =>
                        <ProfileComponent key={profile._id}
                                      profile={profile}/>)
                }
            </ul>
    );
}

export default ProfileList;