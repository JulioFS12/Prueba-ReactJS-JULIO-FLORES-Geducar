import { fetchApi } from '../../database/fetch';
import { types } from '../types/types';

export const getPost = () => {
    return (dispatch) => {

        fetchApi('posts')
            .then( res => res.json())
            .then( (res) => {
                const posts = [
                    ...res,
                ]
                
                dispatch( savePosts(posts) );

            })
    }
}

const savePosts = (posts) => ({
    type: types.getPosts,
    payload: posts
})