import TuitList from "../tuit-list/index";
import WhatsHappening from "../whatsHappening/whatsHappening";
import React from "react";

const HomeScreen = () => {
    return(
        <>
            <div className = "wd-suggested-post">
                <WhatsHappening/>
            </div>
            <TuitList/>
        </>
    )
}
export default HomeScreen;