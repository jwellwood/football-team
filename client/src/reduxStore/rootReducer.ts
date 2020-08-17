import { combineReducers } from 'redux';
import { authReducer as auth } from './auth/auth.reducer';
import { userReducer as user } from './user/user.reducer';
import { alertReducer as alert } from './alert/alert.reducer';
import { resultReducer as result } from './result/result.reducer';
import { squadReducer as squad } from './squad/squad.reducer';
import { teamReducer as team } from './team/team.reducer';
import { seasonReducer as season } from './season/season.reducer';
import { store } from 'reduxStore';

const rootReducer = combineReducers({
  auth,
  user,
  alert,
  team,
  squad,
  result,
  season,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
