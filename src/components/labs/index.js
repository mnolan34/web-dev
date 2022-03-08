import React from "react";
import Classes from "./classes/";
import Styles from "./styles/index.js";
import ConditionalOutput from "./ConditionalOutput";


const Index = () => {
    return(
        <div>
            <h1>Labs</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    )
};

export default Index;
