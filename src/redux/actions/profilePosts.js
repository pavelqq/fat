import {
    CREATE_POST,
    RETRIEVE_POSTS,
    UPDATE_POST,
    DELETE_POST, REGISTER_SUCCESS, SET_MESSAGE, REGISTER_FAIL,
} from "./types";

import PostsService from '../services/profilePosts.service';

export const createPost = () => async (dispatch) => {
    try {
        const res = await PostsService.createPost({author: {userId, username}, message});

        dispatch({
            type: CREATE_POST,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const retrieveTutorials = () => async (dispatch) => {
    try {
        const res = await TutorialDataService.getAll();

        dispatch({
            type: RETRIEVE_POSTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateTutorial = (id, data) => async (dispatch) => {
    try {
        const res = await TutorialDataService.update(id, data);

        dispatch({
            type: UPDATE_TUTORIAL,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteTutorial = (id) => async (dispatch) => {
    try {
        await TutorialDataService.remove(id);

        dispatch({
            type: DELETE_TUTORIAL,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteAllTutorials = () => async (dispatch) => {
    try {
        const res = await TutorialDataService.removeAll();

        dispatch({
            type: DELETE_ALL_TUTORIALS,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const findPostsByTitle = (title) => async (dispatch) => {
    try {
        const res = await TutorialDataService.findByTitle(title);

        dispatch({
            type: RETRIEVE_TUTORIALS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};