import profile from "../data/profiles.json";

const profileReducer =
    (state = profile, action) => {
        switch (action.type) {
            case 'save':
                return action.profile;
            default:
                return state
        }

    }

export default profileReducer;