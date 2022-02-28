const HomeScreenItem = (homeTuits) => {
    return (`
        
            <div class="wd-suggested-post">
                <img class ="wd-avatar-photo"
                     src= ${homeTuits.avatarImage} />
            
                <p class="wd-tweet-info-pos wd-author-font">
                    ${homeTuits.screenName} <span class ="wd-handle-font"> ${homeTuits.handle} - ${homeTuits.time}</span>
                </p>
                <p class ="wd-body-text">
                    ${homeTuits.caption}
                </p>
                <img class ="wd-text-margin wd-image-format"
                     src=${homeTuits.postPhoto}/>

                <div class ="wd-article-box">
                    <p class ="wd-article-title">
                        ${homeTuits.postTitle}
                    </p>
                    <p class ="wd-article-words">
                        ${homeTuits.postCaption}
                    </p>
                </div>

                <div class ="wd-author-font wd-icon-color wd-stats-container">
                    <!-- comment button -->
                    <div>
                        <a class ="wd-icon-color" href="#">
                            <i class ="fa fa-comment"></i> ${homeTuits.comments}
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
