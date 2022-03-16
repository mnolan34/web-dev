import React from "react";
import NavigationSidebar from "./NavigationSideBar/index";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowListItem";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import ExploreComponent from "./ExploreScreen/ExploreComponent";

const Tuiter = () => {
    return(
        <>
            <NavigationSidebar active="home"/>
            <WhoToFollowList/>
            <ExploreComponent/>
            <PostSummaryItem/>
        </>
)
};

export default Tuiter;
