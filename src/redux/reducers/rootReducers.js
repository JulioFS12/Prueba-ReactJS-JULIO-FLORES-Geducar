import { combineReducers } from 'redux';

import { usersReducer } from './usersReducer';
import { postsReducer } from './postsReducer';
import { postDataReducer } from './postdataReducer';
import { commentsReducer } from './commetsReducer';


export const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    comments: commentsReducer,
    postData: postDataReducer
});