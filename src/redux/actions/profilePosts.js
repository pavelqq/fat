import {
    CREATE_POST,
    RETRIEVE_POSTS,
    UPDATE_POST,
    DELETE_POST, REGISTER_SUCCESS, SET_MESSAGE, REGISTER_FAIL,
} from "./types";

import PostsService from '../services/profilePosts.service';

export const createPost = (userId, username, title, description, profilePicture, images, files) => async (dispatch) => {
    try {
        const res = await PostsService.createPost(userId, username, title, description, profilePicture, images, files);

        dispatch({
            type: CREATE_POST,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const retrievePosts = (username) => async (dispatch) => {
    try {
        const res = await PostsService.retrieveUserPosts(username);

        dispatch({
            type: RETRIEVE_POSTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updatePost = (_id, data) => async (dispatch) => {
    try {
        const res = await PostsService.updatePost(_id, data);

        dispatch({
            type: UPDATE_POST,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deletePost = (_id) => async (dispatch) => {
    try {
        await PostsService.deletePost(_id);

        dispatch({
            type: DELETE_POST,
            payload: { _id },
        });
    } catch (err) {
        console.log(err);
    }
};

// export const deleteAllPosts = () => async (dispatch) => {
//     try {
//         const res = await PostsService.deleteAllPosts();
//
//         dispatch({
//             type: DELETE_ALL_POSTS,
//             payload: res.data,
//         });
//
//         return Promise.resolve(res.data);
//     } catch (err) {
//         return Promise.reject(err);
//     }
// };

export const findPostsByTitle = (title) => async (dispatch) => {
    try {
        const res = await PostsService.findByTitle(title);

        dispatch({
            type: RETRIEVE_POSTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};