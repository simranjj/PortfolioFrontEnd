import reducer from './reducer';
import { createStore } from 'redux';

const state = {
    user : {},
}

const store = createStore(
    reducer,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;