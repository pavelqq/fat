import {GET_POSTS, POSTS_ERROR} from '../types'
import axios from '../../../utils/axios';


export const getPosts = () => async dispatch => {

    try{
        const response = await axios.get(`http://localhost:8800/api/posts/60b76780b92778353c7602f5`)
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