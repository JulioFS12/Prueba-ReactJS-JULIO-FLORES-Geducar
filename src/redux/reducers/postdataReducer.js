import { types } from '../types/types';

const initialState = {
    idUser: null,
    idPost: null,
    users: [],
    posts: []
};

export const postDataReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.setIdUser:
            return {
                ...state,
                idUser: action.payload,
            }
        case  types.setIdPost:
            return {
                ...state,
                idPost: action.payload,
            }
        case types.setUsers:
            return {
                ...state,
                users: [...action.payload],
            }
        case types.setPosts:
            return {
                ...state,
                posts: [...action.payload],
            }

        default:
            return state;
    }
}