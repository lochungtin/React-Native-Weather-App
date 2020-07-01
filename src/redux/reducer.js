import { combineReducers } from 'redux';
import { SET_SEARCH, SET_DETAIL, SUB_LOCATION, UNSUB_LOCATION } from './action';

const setSearch = (state = [], action) => {
    if (action.type === SET_SEARCH)
        return action.payload;
    return state;
}

const setDetail = (state = [], action) => {
    if (action.type === SET_DETAIL)
        return action.payload;
    return state;
}

const setSub = (state = [], action) => {
    if (action.type === SUB_LOCATION)
        return [...state, action.payload];
    if (action.type === UNSUB_LOCATION) {
        var newState = [];
        var newSize = 0;
        for (var i = 0; i < state.length; i++) {
            if (state[i].woeid != action.payload.woeid) {
                newState[newSize++] = state[i];
            }
        }
        return newState;
    }
    return state;
};

const reducer = combineReducers({
    results: setSearch,
    detail: setDetail,
    sub: setSub
});

export default reducer;