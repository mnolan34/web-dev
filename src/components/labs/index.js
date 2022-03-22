import React from "react";
import Classes from "./classes/";
import Styles from "./styles/index.js";
import ConditionalOutput from "./ConditionalOutput/index.js";
import ToDo from "./ToDo/TodoList";
import {Link} from "react-router-dom";


const Index = () => {
    return(
        <div>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <ToDo/>

            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter/explore">
                Tuiter
            </Link>
        </div>
    )
};

export default Index;
