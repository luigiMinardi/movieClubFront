import { REGISTER, REGISTERED } from '../actions';

const initialState = {
    step: false,
    id: NaN,
    email: '',
    name: ''
}

const registerUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                email: action.payload.email ? action.payload.email : state.email,
                name: action.payload.name ? action.payload.name : state.name,
                id: action.payload.id ? action.payload.id : state.id,
                step: Number.isInteger(action.payload.step) ? action.payload.step : state.step
            };
        case REGISTERED:
            return initialState;
        default: return state;
    }
}

export default registerUserReducer;