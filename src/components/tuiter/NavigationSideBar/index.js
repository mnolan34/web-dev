import React from "react";

const NavigationSidebar = (
    {active = 'explore'
    }) => {
    if(active === "home") {
        return (
            <>
                <div className="list-group">
                    <a className ="list-group-item" href="/">
                        <i className ="fab fa-twitter"></i>
                    </a>
                <!-- continue the rest of the list -->
         
                <div className = "list-group-item-action active list-group-item wd-flex-container">
                    <a href = "../public/HomeScreen/home.html">
                        <div className = "me-2 wd-boot-left-column">
                            <i className ="fa fa-home fa-inverse"></i>
                        </div>
                        <div className = "ms-1 wd-font-white wd-big-left d-none d-xl-block d-xxl-block">
                            Home
                        </div>
                    </a>
                </div>
         
           
                <div className = "list-group-item wd-flex-container">
            
                    <a href = "../ExploreScreen/explore.html">
                        <div className = "wd-boot-left-column">
                            <i className ="fa fa-hashtag fa-inverse"></i>
                        </div>
                        <div className = "ms-2 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Explore
                        </div>
                    </a>
                </div>
    
                <div className = "list-group-item">
                    <a href = "../notifications.html">
                        <div className = "wd-boot-left-column">
                            <i class="wd-font-black fa fa-bell fa-inverse"></i>
                        </div>
                        <div className = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Notifications
                        </div>
                    </a>
                </div>
    
                <div className = "list-group-item">
                    <a href="../messages.html">
                        <div className = "wd-boot-left-column">
                            <i className = "fa fa-envelope fa-inverse"></i>
                        </div>
                        <div className  = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Message
                        </div>
                    </a>
                </div>
    
                <div className = "list-group-item">
                    <a href = "../bookmarks.html">
                        <div className = "wd-boot-left-column">
                            <i className ="fa fa-bookmark fa-inverse"></i>
                        </div>
                        <div className = "wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Bookmarks
                        </div>
                    </a>
                </div>
    
                <div className = "list-group-item">
                    <a href = "../lists.html">
                        <div className = "wd-boot-left-column">
                            <i className ="fa fa-list fa-inverse"></i>
                        </div>
                        <div className = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            List
                        </div>
                    </a>
                </div>
    
                <div className = "list-group-item">
                    <a href = "../profile.html">
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
                    <a href ="../tuit.html"
                       className ="btn btn-primary btn-block rounded-pill">
                        Tweet</a>
                </div>
            </>
        );
    }
}
export default NavigationSidebar;
