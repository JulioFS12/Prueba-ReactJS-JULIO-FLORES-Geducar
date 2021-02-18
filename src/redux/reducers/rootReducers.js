import { combineReducers } from 'redux';

import { usersReducer } from './usersReducers';
import { postsReducer } from './postsReducers';

export const rootReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
});