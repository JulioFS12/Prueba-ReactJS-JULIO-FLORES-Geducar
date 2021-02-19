
import {  modalHide } from '../redux/actions/iuActions';

export const modalSet = (dispatch) => {
    
    setTimeout( () => {
        dispatch( modalHide() )
    }, 0 )
}