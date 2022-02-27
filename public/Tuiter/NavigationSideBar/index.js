const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a class = "list-group-item" href="../home.html">
                        <i class="fa fa-home fa-inverse"></i>
                    <div class = "d-none d-xl-block d-xxl-block">
                        Home
                    </div>
                </a>

                <a class = "list-group-item" href = "../explore.html">
                    <i class="fa fa-hashtag fa-inverse"></i>
                    <div class = "d-none d-xl-block d-xxl-block">
                        Explore
                    </div>
                </a>
 
                <a class = "list-group-item" href = "../notifications.html">
                    <i class="wd-font-black fa fa-bell fa-inverse"></i>
                    <div class = "wd-big-left wd-font-white d-none d-xl-block d-xxl-block">
                        Notifications
                    </div>
                </a>

                <a class = "list-group-item" href="../messages.html">
                    <i class="fa fa-envelope fa-inverse"></i>
                    <div class = "d-none d-xl-block d-xxl-block">
                        Message
                    </div>
                </a>

   
                <a class = "list-group-item" href = "../bookmarks.html">
                    <i class="fa fa-bookmark fa-inverse"></i>
                    <div class = "d-none d-xl-block d-xxl-block">
                        Bookmarks
                    </div>
                </a>

                <a class = "list-group-item" href = "../lists.html">
                    <i class="fa fa-list fa-inverse"></i>

                    <div class = "d-none d-xl-block d-xxl-block">
                        List
                    </div>
                </a>
                
                <a class = "list-group-item" href = "../profile.html">
                    <i class="fa fa-user fa-inverse"></i>

                    <div class = "d-none d-xl-block d-xxl-block">
                        Profile
                    </div>
                </a>

                <a class = "list-group-item" href = "#">
                 <span class="me-1 fa-stack fa-1x">
                        <i class="fas fa-circle fa-fw fa-stack-1x"></i>
                        <i class="fas fa-ellipsis-h fa-stack-1x"></i>
                 </span>
                 <div class = "ms-2 d-none d-xl-block d-xxl-block">
                     More
                 </div>
                </a>

            </div>
            <div class="d-grid mt-2">
                <a href="../tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
