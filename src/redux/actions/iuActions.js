import {types}  from '../types/types';


export const modalShow = () => {
    return (dispatch) => {
        dispatch( show() )
    }
}

const show = () => ({
    type: types.uiOpenModal,
    payload: true,
});

export const modalHide = () => {
    return (dispatch) => {
        dispatch( hide() )
    }
}

const hide = () => ({
    type: types.uiCloseModal,
    payload: false,
});