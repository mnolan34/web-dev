const ProfileComponent = (profile) => {
    console.log(profile);
    return(
        <div className="list-group-item">
            <div className = "wd-suggested-post">
                <p>
                    {profile.firstName} {profile.lastName}
                </p>
                <p>
                    5, 128 tuits
                </p>
            </div>
            <img className = "wd-banner-image"
                 src = {profile.bannerPicture}
                 alt = "banner"/>

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

export default ProfileComponent;