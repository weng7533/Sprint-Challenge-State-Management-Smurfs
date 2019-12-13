import {
    FETCH_START, FETCH_SUCCESS, FETCH_FAIL,
    POST_START, POST_SUCCESS, POST_FAIL
} from '../actions/actions'

const initialState = {
    data: [],
    fetching: false,
    gotData: false,
    err: false
}

export const reducer = (states = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...states,
                fetching: true,
                err: false
            }
        case FETCH_SUCCESS:
            console.log('SUCCE', action.payLoad)
            return {
                ...states,
                data: action.payLoad,
                fetching: false,
                gotData: true,
                err: false
            }
        case FETCH_FAIL:
            return {
                ...states,
                fetching: false,
                err: true,
                errData: action.payLoad
            }

        case POST_SUCCESS:

            return {
                ...states,
                data: action.payLoad,
                fetching: false,
                gotData: true,
                err: false
            }
        default:
            return states;
    }
}
