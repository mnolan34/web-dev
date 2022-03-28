import React from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "../ProfileScreen/profileComponent";
import '../HomeScreen/bookmarks.css';
import '../ExploreScreen/explore.css';

const ProfileScreen = () => {

    return (
        <>
            <ProfileComponent/>
        </>
    );
}

export default ProfileScreen;