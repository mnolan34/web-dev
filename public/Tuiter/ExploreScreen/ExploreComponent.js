import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`g
            <div class="row">
                       <!-- search field and cog -->
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
           </ul>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
