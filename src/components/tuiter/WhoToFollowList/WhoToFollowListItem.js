import who from "./who.json";
const WhoToFollowListItem = (who) => {
            return(
            <div class="list-group-item">
                <img class="wd-avatar-photo"
                     src={who.avatarIcon}/>
                <div class="wd-float-left">
                    <div class="wd-font-white ms-1"> {who.userName} <i class="fa fa-check-circle"></i></div>
                    <div class="wd-font-gray ms-1"> {who.handle} </div>
                </div>

                <button class="btn btn-primary wd-override-follow">
                    Follow
                </button>
            </div>
    )}

export default WhoToFollowListItem;