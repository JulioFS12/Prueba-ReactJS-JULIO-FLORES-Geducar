import { types } from '../types/types';

const initialState = {
    users: [],
    getting: true
};


export const usersReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.getUsers:
            return {
                ...state,
                users: [ ...action.payload ],
                getting: false,
            }

        default:
            return state;
    }
}