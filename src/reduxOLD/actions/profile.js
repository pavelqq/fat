import {
    SEND_POST,
    SET_POSTS
} from "./types";


export const sendPost = (post) => ({
    type: SEND_POST,
    payload: post,
});

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
});