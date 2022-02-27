const PostSummaryItem = (post) =>{
    return(`
    <li>
    <class = "list-group-item"
    <!-- Components of Post-->
    ${post.topic}
    ${post.userName}
    ${post.time}
    ${post.time}
    ${post.image}
   
    </li>
    `);
}

export default PostSummaryItem;