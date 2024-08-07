import { CHECKOUT_SUCCESS, CHECKOUT_FAIL } from '../actions/orderActions';

const initialState = {
    order: null,
    error: null,
};

export default function orderReducer(state = initialState, action) {
    switch (action.type) {
        case CHECKOUT_SUCCESS:
            return {
                ...state,
                order: action.payload,
                error: null,
            };
        case CHECKOUT_FAIL:
            return {
                ...state,
                order: null,
                error: action.payload,
            };
        default:
            return state;
    }
};