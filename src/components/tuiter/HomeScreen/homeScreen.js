import React from "react";
import NavigationSidebar from "../NavigationSideBar/index";
import PostComponent from "./PostComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";

const homeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-1 col-lg-2 col-xl-2">
                {NavigationSidebar("home")}
            </div>
            <div className = "wd-boot-middle-column col-6">
                {PostComponent()}
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                {PostSummaryList()}
            </div>
        </div>
    );
};

export default homeScreen;