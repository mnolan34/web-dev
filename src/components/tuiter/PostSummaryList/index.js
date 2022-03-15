import React from "react";
import post from "./post.json";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
    return (
            <ul className ="list-group">
            {
            post.map(post => {
            return (
                <PostSummaryItem post={post}/>
            );
        })
    }
            </ul>
); }

export default PostSummaryList;