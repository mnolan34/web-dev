import React from "react";
import NavigationSidebar from "./NavigationSideBar/index";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowListItem";

const Tuiter = () => {
    return(
        <>
            <NavigationSidebar active="home"/>
            <WhoToFollowList/>
        </>
)
};

export default Tuiter;
