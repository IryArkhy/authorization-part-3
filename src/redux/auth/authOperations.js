import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://lpj-tasker.herokuapp.com/users/';
// const BASE_URL = 'https://lpj-tasker.herokuapp.com/users/';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
const unsetToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

const registerUser = credentials => dispatch => {
  dispatch(authActions.registerStart());

  //Pure JS
  // fetch(`${BASE_URL}signup`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(credentials),
  // })
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(resData => dispatch(authActions.registerSuccess(resData)))
  //   .catch(error => dispatch(authActions.registerFailure(error)));

  //The same with axios
  axios
    .post('signup', credentials)
    .then(response => {
      setToken(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch(error => dispatch(authActions.registerFailure(error)));

  // Axios под капотом уже все парсит, поэтому res => res.json() делать не нужно. Сразу пишем response
};

const getCurrentUser = () => (dispatch, getState) => {
  const state = getState();
  console.log(state);
  const { token } = state.auth;

  if (!token) return;
  setToken(token);
  dispatch(authActions.getCurrentStart());

  axios
    .get('current')
    .then(response => {
      console.log(response);
      dispatch(authActions.getCurrentSuccess(response.data));
    })
    .catch(err => dispatch(authActions.getCurrentFailure(err)));
};

const loginUser = credentials => dispatch => {
  dispatch(authActions.loginStart());

  axios
    .post('login', credentials)
    .then(res => {
      setToken(res.data.token);
      dispatch(authActions.loginSuccess(res.data));
    })
    .catch(err => dispatch(authActions.loginFailure(err)));
  // fetch(`${BASE_URL}login`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(credentials),
  // })
  //   .then(res => res.json())
  //   .then(resData => dispatch(authActions.loginSuccess(resData)))
  //   .catch(error => dispatch(authActions.loginFailure(error)));
};
const logout = () => (dispatch, getState) => {
  //With axios---------------------
  // //Нам уже не нужно передавать header передавать, потому что усли мы можем сделать логаут, то мы уже были зарегестрированны или залогинены.
  axios
    .post('logout')
    .then(() => {
      unsetToken();
      dispatch(authActions.logOutSuccess());
    })
    .catch(error => dispatch(authActions.logOutFailure(error)));

  //Without axios------------------
  // const state = getState();
  // // const token = state.auth.token;
  // const { token } = state.auth;
  // console.log(token);

  // dispatch(authActions.logOutStart());
  // fetch(`https://lpj-tasker.herokuapp.com/users/logout`, {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // })
  //   .then(res => res.json())
  //   .then(() => {
  //     dispatch(authActions.logOutSuccess());
  //   })
  //   .catch(error => dispatch(authActions.logOutFailure(error)));
};

export default { registerUser, logout, loginUser, getCurrentUser };
