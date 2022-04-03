import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createTuit, deleteTuit, findAllTuits} from "../../actions/tuits-action";
import TuitListItem
    from "./tuit-list-item";
import '../HomeScreen/bookmarks.css';
import '../ExploreScreen/explore.css';

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const dispatch = useDispatch();
    useEffect(()=>
        findAllTuits(dispatch),
        []);
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