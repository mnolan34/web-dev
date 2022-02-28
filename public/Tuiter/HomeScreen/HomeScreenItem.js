import homeTuits from "../postedTuits/homeTuits";

const HomeScreenItem = (homeTuits) => {
    return (`
            <div class="wd-suggested-post">
                <img class ="wd-avatar-photo"
                     src="${homeTuits.avatarIcon}"/>
            
                <p class="wd-tweet-info-pos wd-author-font">
                    ${homeTuits.screenName} <span class ="wd-handle-font"> ${homeTuits.handle} - ${homeTuits.time}</span>
                </p>
                <p class ="wd-body-text">
                    ${homeTuits.caption}
                </p>
                <img class ="wd-text-margin wd-image-format"
                     src="https://ichef.bbci.co.uk/news/976/cpsprodpb/D9D1/production/_116516755_gettyimages-512808640.jpg"/>

                <div class ="wd-article-box">
                    <p class ="wd-article-title">
                        The Sea Shanty Renaissance
                    </p>
                    <p class ="wd-article-words">
                        As the souls of the dead fill the space of my mind,
                        I'll search without sleeping 'til peace I can find.
                        I fear not the weather, I fear not the sea,
                        I remember the fallen, do they think of me?,
                        When their bones in the ocean forever will be.
                    </p>
                </div>

                <div class ="wd-author-font wd-icon-color wd-stats-container">
                    <!-- comment button -->
                    <div>
                        <a class ="wd-icon-color" href="#">
                            <i class ="fa fa-comment"></i> ${homeTuits.comment}
                        </a>
                    </div>
                    <!-- retweet button -->
                    <div>
                        <a class ="wd-icon-color" href="#">
                            <i class ="fa fa-retweet"></i> ${homeTuits.retuits}
                        </a>
                    </div>
                    
                     <!-- heart button -->
                    <div class = "wd-heart-color">
                        <a class = "wd-heart-color" href = "#">
                            <i class="fa fa-heart"></i> ${homeTuits.likes}
                        </a>
                    </div>
                    <!-- share button -->
                    <div>
                        <a class = "wd-icon-color" href = "#">
                            <i class="fa fa-share"></i>
                        </a>
                    </div>
                </div>
            </div>
    `)
}
export default HomeScreenItem;
