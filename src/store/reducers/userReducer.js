import {toast} from "react-toastify";

const initialState = {
    _id: null,
    name: null,
    email: null,
    bio: null,
    profilePicture: null,
    coverPicture: null,
    followers: [],
    followings: [],
    projects: [],
    isAdmin: null,
    city: null,
    from: null,
    role: null,
    age: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_BY_ID":
            const userById = action.userById.data
            return {
                ...initialState,
                _id: userById._id,
                name: userById.name,
                email: userById.email,
                bio: userById.bio,
                profilePicture: userById.profilePicture,
                coverPicture: userById.coverPicture,
                followers: userById.followers,
                followings: userById.followings,
                projects: userById.projects,
                isAdmin: userById.isAdmin,
                city: userById.city,
                from: userById.from,
                role: userById.role,
                age: userById.age
            };
        case "CLEAR_USER_BY_ID":
            return {
                _id: null,
                name: null,
                email: null,
                bio: null,
                profilePicture: null,
                coverPicture: null,
                followers: [],
                followings: [],
                projects: [],
                isAdmin: null,
                city: null,
                from: null,
                role: null,
                age: null
            };
        default:
            return state;
    }
};

export default userReducer;
