import NavigationSidebar from "../NavigationSidebar/index.js";
//import PostComponent from ;
import ExploreComponent from "./ExploreComponent.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        <div class = "wd-boot-middle-column col-6">
        
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${ExploreComponent()}
        </div>
        </div>
    `);
})($);