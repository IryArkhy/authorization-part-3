import { combineReducers } from 'redux';
import actionTypes from './actionTypes';

// {
//   auth: {
//     user: {
//       name: '',
//       email: ''
//     },
//     token: 'qweqweqweqwe',
//     error: null,
//     loading: false
//   }
// }

const user = (state = { name: null, password: null }, { type, payload }) => {
  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
    case actionTypes.GET_CURRENT_SUCCESS:
      return payload.user;
    case actionTypes.LOGOUT_SUCCESS:
      return { name: null, email: null };

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.REGISTER_SUCCESS:
    case actionTypes.LOGIN_SUCCESS:
      return payload.token;
    case actionTypes.LOGOUT_SUCCESS:
      return null;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.REGISTER_FAILURE:
    case actionTypes.LOGOUT_FAILURE:
    case actionTypes.LOGIN_FAILURE:
    case actionTypes.GET_CURRENT_FAILURE:
      return payload.error;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  error,
});
