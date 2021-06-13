import { SEND_POST, SET_POSTS } from "../actions/types"
import { setPosts } from "../actions/profile";

const initialState = {
    post: {
        author: {
            userId: '',
            username: '',
        },
        message: '',
        files: null,
    }
}

export default function profilePosts (state = initialState, action) {
    switch(action.type){
        case SEND_POST: {
            return {...state, posts: [...state.posts, action.payload]}
        }
        case SET_POSTS: {
            return {...state, posts: action.payload}
        }
        default:
            return state
    }
}

export const savePosts = () => async (dispatch, getState) => {
    const posts = getState().posts;
    await fetch("http://localhost:8800/api/posts", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(...posts)
    })
    alert("Выполнено!")
}

export const loadPosts = () => async (dispatch, getState) => {
    const userId = getState().posts.author.userId
    const posts = await fetch(`http://localhost:8800/api/posts/timeline/${userId}`).then(res => res.json())
    dispatch(setPosts(posts))
}