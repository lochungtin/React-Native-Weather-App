export const SET_SEARCH = 'SET_SEARCH';
export const SET_DETAIL = 'SET_DETAIL';
export const SUB_LOCATION = 'SUB_LOCATION';
export const UNSUB_LOCATION = 'UNSUB_LOCATION';

export const setSearch = payload => ({
    type: SET_SEARCH,
    payload: payload
})

export const setDetail = payload => ({
    type: SET_DETAIL,
    payload: payload
})

export const subLocation = payload => ({
    type: SUB_LOCATION,
    payload: payload
})

export const unsubLocation = payload => ({
    type: UNSUB_LOCATION,
    payload: payload
})