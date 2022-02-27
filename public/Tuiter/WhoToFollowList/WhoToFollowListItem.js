const WhoToFollowListItem = (who) =>{
    return(`
        <!-- Components of profile -->
            <div class = "list-group-item">
                    <img class = "wd-avatar-photo"
                          src = ${who.avatarIcon} />
                    <div class = "wd-float-left">
                        <div class = "wd-font-white ms-1"> ${who.userName} <i class="fa fa-check-circle"></i></div>
                        <div class = "wd-font-gray ms-1"> ${who.handle} </div>
                    </div>
                    <!-- Need to include Tuit button -->
                    <button class = "btn btn-primary wd-override-follow">
                        Follow
                    </button>
            </div>
    
    `);
}

export default WhoToFollowListItem;