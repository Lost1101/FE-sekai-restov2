import axios from 'axios';
import config from '../config';

export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAIL = 'CHECKOUT_FAIL';

export const checkout = (orderItems, totalCash) => async (dispatch) => {
    try {
        const response = await axios.post(`${config.apiUrl}/checkout`, {
            orderItems,
            totalCash
        });
        dispatch({ type: CHECKOUT_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CHECKOUT_FAIL, payload: error.response ? error.response.data : error.message });
    }
};