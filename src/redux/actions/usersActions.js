import { fetchApi } from '../../database/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';

export const getUsers = () => {
    return ( dispatch ) => {

        fetchApi('users')
            .then( res => res.json())
            .then( (res) => {
                const users = [
                    ...res,
                ]
                
                dispatch( saveUsers(users) )

            }).catch( res => Swal.fire('Oops...', 'Server no working, please wait 5s!', 'error'))
    }
}


const saveUsers = (users) => ({
    type: types.getUsers,
    payload: users,
})