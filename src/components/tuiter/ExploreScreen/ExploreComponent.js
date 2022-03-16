import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(
        <>
            <div className="row p-3">
                <div className = "d-flex">
                    <div className = "input-group">
                        <span className = "input-group-text wd-override-blend">
                            <i className = "fas fa-search"></i>
                        </span>
                    <input className = "wd-input-bar mb-1"
                           type = "text"
                           placeholder = "Search Tuiter"/>
                    </div>
                    <!-- Search button Removed Button Type Here -->
                    <div className = "float-end ms-1 me-1">
                        <a href = "../../../../public/Tuiter/explore-settings.html"> <i className ="fa fa-cog fa-2x fa-inverse"> </i> </a>
                    </div>
                </div>
           
                <ul className="nav nav-tabs nav-fill">
                    <li className ="nav-item wd-inUseBorder">
                        <a className="nav-link wd-inUseOverride" href="#">For You</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-text-override" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-text-override" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-text-override" href="#">Sports</a>
                    </li>
                    <li className="d-none d-md-block d-lg-block d-xl-block d-xxl-block nav-item">
                        <a className="nav-link wd-text-override" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>

           <div className = "wd-banner-image position-relative">
            <img className = "wd-banner-image wd-border-photo img-fluid"
                    src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
            <div className = "ms-1 wd-banner-font position-absolute bottom-0 start-20">
                SpaceX's Starship
            </div>
        </div>

        <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;
