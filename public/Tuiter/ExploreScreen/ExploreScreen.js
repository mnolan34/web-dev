import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row p-2">
        <div class="col-3 col-sm-2 col-xs-1 mt-3 ps-2 pe-2">
            ${NavigationSidebar("explore")}
        </div>
        <div class = "wd-boot-middle-column col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-9 mt-3 pe-2 ps-2 mb-3">
            ${ExploreComponent()}
        </div>
        <div class="d-none d-lg-block d-xl-block d-xxl-block mt-3 col-3">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);

