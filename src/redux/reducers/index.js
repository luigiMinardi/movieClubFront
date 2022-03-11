import { combineReducers } from 'redux';

import authedUser from './loginUser.reducer';
import requestedMovie from './movieManager.reducer';

const rootReducer = combineReducers({
    authedUser,
    requestedMovie
});

export default rootReducer;