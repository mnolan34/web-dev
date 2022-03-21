import React from "react";
import {Link} from "react-router-dom";
const NavigationSidebar = (active) => {
        return (
            <>
                <div className="list-group">
                    <Link to = "/labs"
                          className ="list-group-item">
                        <i className ="fab fa-twitter"></i>
                    </Link>
                    <Link to="/tuiter/home"
                     className = {`list-group-item
                        ${active === 'home' ? 'active' : ""}`}>
                        <i className="fa fa-home"></i>
                        <span className="d-none d-xl-inline">Home</span>

                    </Link>
         
                    <Link to= "/tuiter/explore"
                        className = {`list-group-item wd-flex container"
                            ${active === 'explore' ? 'active' : ''}`}>

                        <i className="fa fa-hashtag"></i>
                        <span className="d-none d-xl-inline">Explore</span>

                    </Link>
    
                <div className = {`list-group-item wd-flex container"
                     ${active === 'notifications' ? 'active' : ''}`}>
                    <a href = "../../../../public/Tuiter/notifications.html">
                        <div className = "wd-boot-left-column">
                            <i className="wd-font-white fa fa-bell fa-inverse"></i>
                        </div>
                        <div className = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Notifications
                        </div>
                    </a>
                </div>
    
                <div className = {`list-group-item wd-flex container"
                     ${active === 'messages' ? 'active' : ''}`}>
                    <a href="../../../../public/Tuiter/messages.html">
                        <div className = "wd-boot-left-column">
                            <i className = "fa fa-envelope fa-inverse"></i>
                        </div>
                        <div className  = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Message
                        </div>
                    </a>
                </div>
    
                <div className = "list-group-item">
                    <a href = "../../../../public/Tuiter/bookmarks.html">
                        <div className = "wd-boot-left-column">
                            <i className ="fa fa-bookmark fa-inverse"></i>
                        </div>
                        <div className = "wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Bookmarks
                        </div>
                    </a>
                </div>
    
                <div className = "list-group-item">
                    <a href = "../../../../public/Tuiter/lists.html">
                        <div className = "wd-boot-left-column">
                            <i className ="fa fa-list fa-inverse"></i>
                        </div>
                        <div className = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            List
                        </div>
                    </a>
                </div>
    
                <div className = "list-group-item">
                    <a href = "../../../../public/Tuiter/profile.html">
                        <div className = "wd-boot-left-column">
                            <i className ="fa fa-user fa-inverse"></i>
                        </div>
                        <div className = "wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Profile
                        </div>
                    </a>
                </div>
    
                <div className = "list-group-item wd-override-special">
                    <a href = "#">
                        <div className = "me-1 wd-boot-left-column">
                            <span className ="me-1 wd-override-no-pad fa-stack fa-1x">
                                <i className ="wd-font-white fas fa-circle fa-fw fa-stack-1x"></i>
                                <i className ="wd-font-black fas fa-ellipsis-h fa-stack-1x"></i>
                            </span>
                        </div>
                        <div className = "ms-2 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            More
                        </div>
                    </a>
                </div>
                </div>

                <div className ="d-grid mt-2">
                    <a href ="../../../../public/Tuiter/tuit.html"
                       className ="btn btn-primary btn-block rounded-pill">
                        Tweet</a>
                </div>
            </>
        );
}
export default NavigationSidebar;
