import React from "react";
import homeTuits from "./homeTuits";
import HomeScreenItem from "./HomeScreenItem.js";
const HomeScreenList = () => {
    return (
            <ul className="list-group">
                   {
                       homeTuits.map(homeTuits => {
                           return (
                               <HomeScreenItem homeTuits={homeTuits}/>
                           );
                       })
                    })
            </ul>
); }

export default HomeScreenList;