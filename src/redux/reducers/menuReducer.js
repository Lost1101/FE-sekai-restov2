import { FETCH_MENUS_SUCCESS} from '../actions/menuAction';

const initialState = {
    menus: []
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_MENUS_SUCCESS:
        return { ...state, menus: action.payload };
      default:
        return state;
    }
  }