import { combineReducers } from 'redux';

import authenticatedUser from './loginUser.reducer';
import requestedMovie from './movieManager.reducer';
import registrationData from './registerUser.reducer';

const rootReducer = combineReducers({
    authenticatedUser,
    requestedMovie,
    registrationData
});

export default rootReducer;