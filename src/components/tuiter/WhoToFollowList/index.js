import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <div class = "list-group-item">
                   <div class = "ms-1">Who to Follow </div>
                </div>
            
            {
                who.map(who => {
                    return (
                        <WhoToFollowListItem who={who}/>
                    );
                })
    }
            </ul>
`); }

export default WhoToFollowList;
