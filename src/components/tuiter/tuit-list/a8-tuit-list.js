import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createTuit, deleteTuit, findAllTuits}
    from "../../actions/tuits-action";
import TuitListItem from "./a8-tuit-list-item";

const TuitList = () => {
    const tuits = useSelector(state=> state.tuits);
    const dispatch = useDispatch();
    useEffect(()=>
        findAllTuits(dispatch),
        []);
    //New 6.4
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});

    return(
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