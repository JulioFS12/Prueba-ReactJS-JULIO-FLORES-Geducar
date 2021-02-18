import { types } from '../types/types';

const initialState = {
    comments: [],
    getting: true
};

export const commentsReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.getComments:
            return {
                ...state,
                comments: [ ...action.payload ],
                getting: false,
            }

        default:
            return state;
    }
}