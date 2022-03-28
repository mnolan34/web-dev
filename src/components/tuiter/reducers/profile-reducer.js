import profile from "../data/profiles.json";

const profileReducer =
    (state = profile, action) => {
        switch (action.type) {
            case 'edit-profile':
                const newTuit = {
                    tuit: action.tuit,
                    _id: (new Date()).getTime() + '',
                    handle: "react",
                    time: "now",
                    postedBy: {
                        "username": "ReactJS"
                    },
                    stats: {
                        retuits: 111,
                        likes: 222,
                        comments: 333
                    }
                }
                return [
                    newTuit,
                    ...state,
                ];
            default:
                return profile
        }

    }

export default profileReducer;