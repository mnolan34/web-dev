import React from "react";
//import who from "../data/who.json";
import {useSelector} from "react-redux";
import WhoToFollowListItem from "./WhoToFollowListItem";
const WhoToFollowList = () => {
    const who = useSelector((state) => state);
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
