import React, {useState} from "react";
import {useSelector} from "react-redux";
import ProfileComponent from "./profileComponent";
import '../HomeScreen/bookmarks.css';
import '../ExploreScreen/explore.css';
import {combineReducers, createStore} from "redux";
import profileReducer from "../reducers/profile-reducer";
import {Provider} from "react-redux";


const reducer = combineReducers({
    profiles: profileReducer
})
const store = createStore(reducer);

const ProfileList = () => {
    const profile = useSelector(
        state => state.profile);
    return (
        <Provider store={store}>
            <ul className="list-group">

                {
                    profile && profile.map && profile.map(profile =>
                        <ProfileComponent key={profile._id}
                                      profile={profile}/>)
                }
            </ul>
        </Provider>
    );
}

export default ProfileList;