import { fetchApi } from '../../database/fetch';
import { types } from '../types/types';

export const getPost = (id) => {
    return (dispatch) => {

        fetchApi('posts', 'userId', id)
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