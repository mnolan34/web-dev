import React from "react";
import NavigationSidebar from "./NavigationSideBar/index";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowListItem";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";

const Tuiter = () => {
    return(
        <>
            <NavigationSidebar active="home"/>
            <WhoToFollowList/>
            <PostSummaryItem/>
        </>
)
};

export default Tuiter;
