import { combineReducers } from 'redux';

import authedUser from './loginUser.reducer';
import requestedMovie from './movieManager.reducer';
import registrationData from './registerUser.reducer';

const rootReducer = combineReducers({
    authedUser,
    requestedMovie,
    registrationData
});

export default rootReducer;