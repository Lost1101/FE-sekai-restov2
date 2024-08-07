import axios from 'axios';
import config from '../config';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const signup = (username, email, password) => async (dispatch) => {
    try {
      const response = await axios.post(`${config.apiUrl}/signup`, { username, email, password });
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
      alert(error);
    }
  };

  export const login = (username, password) => async (dispatch) => {
    try {
      const response = await axios.post(`${config.apiUrl}/login`, { username, password });
      localStorage.setItem('token', response.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    } catch (error) {
      alert(error.response.data.message || error.message);
    }
  };

  export const logout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
        localStorage.removeItem('token');
        return { type: LOGOUT };
    }
};