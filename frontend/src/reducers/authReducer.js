import { TEST_DISPATCH, SET_CURRENT_USER } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TEST_DISPATCH:
            return {
                ...state,
                user: action.payload
            }
        case SET_CURRENT_USER:
            return state;
        default:
            return {};
    }
}