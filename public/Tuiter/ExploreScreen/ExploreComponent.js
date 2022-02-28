import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row p-3">
                <div class = "flex-container">
                    <div class = "input-group">
                        <span class = "input-group-text wd-override-blend">
                            <i class="fas fa-search"></i>
                        </span>
                    <input class = "wd-input-bar mb-1"
                           type = "text"
                           placeholder = "Search Tuiter"/>
                    </div>
                    <!-- Search button-->
                    <div class = "float-end ms-1 me-1" type = "button">
                        <a href = "../explore-settings.html"><i class="fa fa-cog fa-2x fa-inverse"></i></a>
                    </div>
                </div>
           
                <ul class="nav nav-tabs nav-fill">
                    <li class="nav-item wd-inUseBorder">
                        <a class="nav-link wd-inUseOverride" href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-text-override" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-text-override" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-text-override" href="#">Sports</a>
                    </li>
                    <li class="d-none d-md-block d-lg-block d-xl-block d-xxl-block nav-item">
                        <a class="nav-link wd-text-override" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
    
           <!-- image with overlaid text -->
           <div class = "wd-banner-image position-relative">
            <img class = "wd-banner-image wd-border-photo img-fluid"
                    src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"/>
            <div class = "ms-1 wd-banner-font position-absolute bottom-0 start-20">
                SpaceX's Starship
            </div>
        </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
