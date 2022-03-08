import React from "react";
import Classes from "./classes/";
import Styles from "./styles/index.js";
import ConditionalOutput from "./ConditionalOutput";
import ToDo from "./ToDo/TodoList";


const Index = () => {
    return(
        <div>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <ToDo/>
        </div>
    )
};

export default Index;
