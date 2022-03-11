import { LOGIN, LOGOUT, MODIFY_CREDENTIALS } from '../actions';

const initialState = {
    token: '',
    user: {}
}

const loginUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, token: action.payload.token, user: action.payload.user };
        case LOGOUT:
            return initialState;
        case MODIFY_CREDENTIALS:
            return { ...state, user: action.payload };
        default: return state;
    }
}

export default loginUserReducer;