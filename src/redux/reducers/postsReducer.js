import { types } from '../types/types';

const initialState = {
    posts: [],
    getting: true
};


export const postsReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.getPosts:
            return {
                ...state,
                posts: [ ...action.payload ],
                getting: false,
            }

        default:
            return state;
    }
}