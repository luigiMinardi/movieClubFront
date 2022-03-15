import { LOGIN, LOGOUT, MODIFY_USER } from '../actions';

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
        case MODIFY_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    [action.payload.field]: action.payload.field_value
                }
            };
        default: return state;
    }
}

export default loginUserReducer;