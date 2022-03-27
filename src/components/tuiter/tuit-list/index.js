import React from "react";
import {useSelector} from "react-redux";
import tuits from "./tuits.json";
import TuitListItem
    from "./tuit-list-item";
import '../HomeScreen/bookmarks.css';
import '../ExploreScreen/explore.css';

const TuitList = () => {
    //const tuits = useSelector(
       // state => state.tuits);
    return (
        <ul className="ttr-tuits list-group">
            {
                tuits.map && tuits.map(tuit =>
                    <TuitListItem key={tuit._id}
                                  tuit={tuit}/>)
            }
        </ul>
    );
}

export default TuitList;