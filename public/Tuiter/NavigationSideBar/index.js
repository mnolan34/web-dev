const NavigationSidebar = (active) => {
    if(active === "home") {
        return (`     
                <div class="list-group">
                    <a class="list-group-item" href="/">
                        <i class="fab fa-twitter"></i>
                    </a>
                <!-- continue the rest of the list -->
         
                <div class = "list-group-item-action active list-group-item wd-flex-container">
                    <a href = "../HomeScreen/home.html">
                        <div class = "me-2 wd-boot-left-column">
                            <i class="fa fa-home fa-inverse"></i>
                        </div>
                        <div class = "ms-1 wd-font-white wd-big-left d-none d-xl-block d-xxl-block">
                            Home
                        </div>
                    </a>
                </div>
         
           
                <div class = "list-group-item wd-flex-container">
            
                    <a href = "../ExploreScreen/explore.html">
                        <div class = "wd-boot-left-column">
                            <i class="fa fa-hashtag fa-inverse"></i>
                        </div>
                        <div class = "ms-2 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Explore
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item">
                    <a href = "../notifications.html">
                        <div class = "wd-boot-left-column">
                            <i class="wd-font-black fa fa-bell fa-inverse"></i>
                        </div>
                        <div class = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Notifications
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item">
                    <a href="../messages.html">
                        <div class = "wd-boot-left-column">
                            <i class="fa fa-envelope fa-inverse"></i>
                        </div>
                        <div class = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Message
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item">
                    <a href = "../bookmarks.html">
                        <div class = "wd-boot-left-column">
                            <i class="fa fa-bookmark fa-inverse"></i>
                        </div>
                        <div class = "wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Bookmarks
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item">
                    <a href = "../lists.html">
                        <div class = "wd-boot-left-column">
                            <i class="fa fa-list fa-inverse"></i>
                        </div>
                        <div class = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            List
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item">
                    <a href = "../profile.html">
                        <div class = "wd-boot-left-column">
                            <i class="fa fa-user fa-inverse"></i>
                        </div>
                        <div class = "wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Profile
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item wd-override-special">
                    <a href = "#">
                        <div class = "me-1 wd-boot-left-column">
                            <span class="me-1 wd-override-no-pad fa-stack fa-1x">
                                <i class="wd-font-white fas fa-circle fa-fw fa-stack-1x"></i>
                                <i class="wd-font-black fas fa-ellipsis-h fa-stack-1x"></i>
                            </span>
                        </div>
                        <div class = "ms-2 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            More
                        </div>
                    </a>
                </div>  
    
                </div>
                <div class="d-grid mt-2">
                    <a href="../tuit.html"
                       class="btn btn-primary btn-block rounded-pill">
                        Tweet</a>
                </div>
        `);
    }else{
        return(`
            <div class="list-group">
                    <a class="list-group-item" href="/">
                        <i class="fab fa-twitter"></i>
                    </a>
                <!-- continue the rest of the list -->
         
                <div class = "list-group-item wd-flex-container">
                    <a href = "../HomeScreen/home.html">
                        <div class = "me-2 wd-boot-left-column">
                            <i class="fa fa-home fa-inverse"></i>
                        </div>
                        <div class = "ms-1 wd-font-white wd-big-left d-none d-xl-block d-xxl-block">
                            Home
                        </div>
                    </a>
                </div>
         
           
                
                <div class = "list-group-item-action active list-group-item wd-flex-container">
                    <a href = "../ExploreScreen/explore.html">
                        <div class = "wd-boot-left-column">
                            <i class="fa fa-hashtag fa-inverse"></i>
                        </div>
                        <div class = "ms-2 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Explore
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item">
                    <a href = "../notifications.html">
                        <div class = "wd-boot-left-column">
                            <i class="wd-font-black fa fa-bell fa-inverse"></i>
                        </div>
                        <div class = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Notifications
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item">
                    <a href="../messages.html">
                        <div class = "wd-boot-left-column">
                            <i class="fa fa-envelope fa-inverse"></i>
                        </div>
                        <div class = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Message
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item">
                    <a href = "../bookmarks.html">
                        <div class = "wd-boot-left-column">
                            <i class="fa fa-bookmark fa-inverse"></i>
                        </div>
                        <div class = "wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Bookmarks
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item">
                    <a href = "../lists.html">
                        <div class = "wd-boot-left-column">
                            <i class="fa fa-list fa-inverse"></i>
                        </div>
                        <div class = "ms-1 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            List
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item">
                    <a href = "../profile.html">
                        <div class = "wd-boot-left-column">
                            <i class="fa fa-user fa-inverse"></i>
                        </div>
                        <div class = "wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            Profile
                        </div>
                    </a>
                </div>
    
                <div class = "list-group-item wd-override-special">
                    <a href = "#">
                        <div class = "me-1 wd-boot-left-column">
                            <span class="me-1 wd-override-no-pad fa-stack fa-1x">
                                <i class="wd-font-white fas fa-circle fa-fw fa-stack-1x"></i>
                                <i class="wd-font-black fas fa-ellipsis-h fa-stack-1x"></i>
                            </span>
                        </div>
                        <div class = "ms-2 wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                            More
                        </div>
                    </a>
                </div>  
    
                </div>
                <div class="d-grid mt-2">
                    <a href="../tuit.html"
                       class="btn btn-primary btn-block rounded-pill">
                        Tweet</a>
                </div>
            
        `)
    }
}
export default NavigationSidebar;
