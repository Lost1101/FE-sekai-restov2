import axios from 'axios';
import config from '../config';

export const FETCH_MENUS_SUCCESS = 'FETCH_MENUS_SUCCESS';
export const ADD_MENUS_SUCCESS = 'ADD_MENUS_SUCCESS';

export const fetchMenus = () => async (dispatch, getState) => {
    const token = getState().auth.token;
    const response = await axios.get(`${config.apiUrl}/menu`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch({ type: FETCH_MENUS_SUCCESS, payload: response.data });
  };