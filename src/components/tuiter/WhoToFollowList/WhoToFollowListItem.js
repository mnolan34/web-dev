const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png",
            userName: "NASA",
            handle: "NASA",
        }
    }) => {
            return(
            <div className="list-group-item">
                <img className="wd-avatar-photo"
                     src={who.avatarIcon}
                    alt = "avatar"/>
                <div className="wd-float-left">
                    <div className="wd-font-white ms-1"> {who.userName} <i className="fa fa-check-circle"></i></div>
                    <div className="wd-font-gray ms-1"> @{who.handle} </div>
                </div>

                <button className="btn btn-primary wd-override-follow">
                    Follow
                </button>
            </div>
    )}

export default WhoToFollowListItem;