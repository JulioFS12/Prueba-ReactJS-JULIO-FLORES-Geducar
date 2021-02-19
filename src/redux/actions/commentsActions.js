import { fetchApi } from '../../database/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const getComments = (postId) => {
    return (dispatch) => {

        fetchApi('comments', 'postId', postId)
            .then( res => res.json())
            .then( (res) => {
                const comments = [
                    ...res,
                ]
                
                dispatch( savePosts( comments ) );

            }).catch(res => Swal.fire('Oops...', 'Server no working, please wait 5s!', 'error'))
    }
}

const savePosts = (comments) => ({
    type: types.getComments,
    payload: comments
});