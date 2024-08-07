import { REGISTER_SUCCESS, LOGIN_SUCCESS, LOGOUT} from '../actions/authActions';

const initialState = {
    token: localStorage.getItem('token') || null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return { ...state};
      case LOGIN_SUCCESS:
        return { ...state, token: action.payload, isAuthenticated:true, user: action.payload.user, };
      case LOGOUT:
        return { ...state, token: null, isAuthenticated:false,  user: null};
      default:
        return state;
    }
}