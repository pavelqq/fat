import {GET_POSTS, POSTS_ERROR} from '../types'
import axios from '../../../utils/axios';


export const getPosts = () => async dispatch => {

    try{
        const response = await axios.get(`http:/localhost:3000/api/users/1/posts`)
        dispatch( {
            type: GET_POSTS,
            payload: response.data
        })
    }
    catch(error){
        dispatch( {
            type: POSTS_ERROR,
            payload: error,
        })
    }

}