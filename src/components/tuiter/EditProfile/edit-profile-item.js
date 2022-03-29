const EditProfileItem = (profile) => {
    return(
        <div className="list-group-item">
            <img className="wd-avatar-photo"
                 src={profile.profilePhoto}
                 alt = "avatar"/>
            <div className="wd-float-left">
                <div className="wd-font-white ms-1"> {profile.userName} <i className="fa fa-check-circle"></i></div>
                <div className="wd-font-gray ms-1"> @{profile.handle} </div>
            </div>

            <button className="btn btn-primary wd-override-follow">
                Follow
            </button>
        </div>
    )}

export default EditProfileItem;