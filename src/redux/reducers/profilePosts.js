import {
    CREATE_POST,
    RETRIEVE_POSTS,
    UPDATE_POST,
    DELETE_POST,
} from "../actions/types";

const initialState = [];

export default function (posts = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case CREATE_POST:
            return [...posts, payload];

        case RETRIEVE_POSTS:
            return payload;

        case UPDATE_POST:
            return posts.map((post) => {
                if (post._id === payload._id) {
                    return {
                        ...post,
                        ...payload,
                    };
                } else {
                    return post;
                }
            });

        case DELETE_POST:
            return posts.filter(({ _id }) => _id !== payload._id);

        // case DELETE_ALL_POSTS:
        //     return [];

        default:
            return posts;
    }
};