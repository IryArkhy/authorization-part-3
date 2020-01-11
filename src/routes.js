import HomeView from './views/HomeView/HomeView';
import LoginPage from './views/Login/LoginPage';
import SignUpPage from './views/SignUpPage/SignUpPage';
// import LogOutPage from './views/LogOutPage/LogOutPage';
import TasksView from './views/TasksView/TasksView';

export default {
  HOME: { path: '/', exact: true, component: HomeView },
  SIGNUP: { path: '/register', component: SignUpPage },
  LOGIN: { path: '/login', component: LoginPage },
  // LOGOUT: { path: '/logout', component: LogOutPage },
  TASKS: { path: '/tasks', component: TasksView },
};
