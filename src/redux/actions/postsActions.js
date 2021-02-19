import { fetchApi } from '../../database/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const getPost = (postUserId) => {
    return (dispatch) => {

        fetchApi('posts', 'userId', postUserId)
            .then( res => res.json())
            .then( (res) => {
                const posts = [
                    ...res,
                ]
                
                dispatch( savePosts(posts) );

            }).catch( res => Swal.fire('Oops...', 'Server no working, please wait 5s!', 'error'))
    }
}

const savePosts = (posts) => ({
    type: types.getPosts,
    payload: posts
});