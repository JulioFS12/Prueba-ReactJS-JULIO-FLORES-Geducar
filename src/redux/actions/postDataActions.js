import {types}  from '../types/types';


export const setUsers = (users) => {
    return (dispatch) => {
        dispatch( saveUsers( users ) )
    }
}

const saveUsers = (users) => ({
    type: types.setUsers,
    payload: users,
});

export const setPosts = (posts) => {
    return (dispatch) => {
        dispatch( savePosts( posts ) )
    }
}

const savePosts = (posts) => ({
    type: types.setPosts,
    payload: posts,
});