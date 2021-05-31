import axios from "../../utils/axios";
import {useEffect} from "react";

const moduleName = 'posts';

const GET_POSTS = `${moduleName}/GET_POSTS`;

const defaultState = {
    posts: []
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case GET_POSTS:
            return {...state, posts: payload.data}
        default: {
            return state;
        }
    }
};

debugger;

export const getPosts = () => async (dispatch) => {
    try {
        const fetchPosts = () => {
            axios.get('/api/users/1/posts').then(response => {
                dispatch({type: GET_POSTS, payload: response.data.posts})
                console.log(response.data.posts);
            });
        };

        fetchPosts()

    } catch (error) {
        console.log(error)
    }
};

debugger;