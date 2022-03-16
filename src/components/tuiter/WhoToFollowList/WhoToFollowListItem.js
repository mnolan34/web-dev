import who from "./who.json";
const WhoToFollowListItem = (who) => {
            return(
            <div className="list-group-item">
                <img className="wd-avatar-photo"
                     src={who.avatarIcon}/>
                <div className="wd-float-left">
                    <div className="wd-font-white ms-1"> {who.userName} <i className="fa fa-check-circle"></i></div>
                    <div className="wd-font-gray ms-1"> {who.handle} </div>
                </div>

                <button className="btn btn-primary wd-override-follow">
                    Follow
                </button>
            </div>
    )}

export default WhoToFollowListItem;