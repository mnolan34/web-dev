import React from "react";
import Classes from "./classes/";
import {Link} from "react-router-dom";

const Index = () => {
    return(
        <>
            <h1>Lab</h1>
            <Classes/>

            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>

        </>
    )
};

export default Index;
