import profiles from "../data/profiles.json";

const profileReducer =
    (state = profiles, action) => {
        switch (action.type) {
            case 'save':
                return action.profile;
            default:
                return profiles
        }

    }

export default profileReducer;