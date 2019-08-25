import { SET_AUTH } from '../actions/types';
const initialState = {
  isLoggedIn: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
}
