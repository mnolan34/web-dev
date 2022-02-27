const PostSummaryItem = (post) =>{
    return(`
 
    <class = "list-group-item"
    <!-- Components of Post-->
    <div class = "wd-suggested-post mb-2 wd-flex-container">
            <div class = "mt-1 ms-1">
                <div class = "wd-trending-font">${post.topic}</div>

                <div>${post.userName} <i class="fa fa-check-circle"></i> 
                    <span class = "wd-trending-font"> ${post.time}</span>
                </div>

                <div>
                    React.js is a component based front end library
                    that makes it very easy to build Single Page Applications or SPAs
                </div>
                
                <div class = "wd-trending-font">
                     ${post.tweets}
                 </div>
                
            </div>
            
            <div>
                 <img class = "mt-1 mb-1 me-1 wd-image-format"
                      src = ${post.image}/>
             </div>
    </div>
  
   
    `);
}

export default PostSummaryItem;