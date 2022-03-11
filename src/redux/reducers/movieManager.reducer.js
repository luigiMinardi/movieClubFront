import { MOVIE_INFO, MOVIE_SEARCH } from "../actions";

const initialState = {
    info: {},
    queryResult: []
}

const movieManagerReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_INFO:
            return { ...state, info: action.payload };
        case MOVIE_SEARCH:
            return { ...state, queryResult: action.payload };
        default: return state;
    }
}

export default movieManagerReducer;