import { applyMiddleware, createStore } from 'redux'
import { save, load } from 'redux-localstorage-simple';
import reducer from './reducers';

const storeWithMiddleware = applyMiddleware(
    save({ states: ['authedUser', 'requestedMovie'] })
)(createStore);

const store = storeWithMiddleware(
    reducer,
    load({ states: ['authedUser', 'requestedMovie'] }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
        trace: true,
    })
)

export default store;