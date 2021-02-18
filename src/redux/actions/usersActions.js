import { fetchApi } from '../../database/fetch';
import { types } from '../types/types';

export const getUsers = () => {
    return ( dispatch ) => {

        fetchApi('users')
            .then( res => res.json())
            .then( (res) => {
                const users = [
                    ...res,
                ]
                
                dispatch( saveUsers(users) )

            })
    }
}


const saveUsers = (users) => ({
    type: types.getUsers,
    payload: users,
})