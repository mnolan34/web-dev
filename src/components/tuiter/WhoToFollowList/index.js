import React from "react";
import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";
const WhoToFollowList = () => {
    return (
            <ul className="list-group">
                <div className = "list-group-item">
                   <div className = "ms-1">Who to Follow </div>
                </div>
            {
                who.map(who => {
                    return (
                        <WhoToFollowListItem who={who}/>
                    );
                })
    }
            </ul>
); }

export default WhoToFollowList;
