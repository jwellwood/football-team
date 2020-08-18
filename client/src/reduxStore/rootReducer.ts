import { combineReducers } from 'redux';
import { authReducer as auth } from './auth';
import { userReducer as user } from './user';
import { alertReducer as alert } from './alert';
import { resultReducer as result } from './result';
import { resultsReducer as results } from './results';
import { squadReducer as squad } from './squad';
import { playerReducer as player } from './player';
import { teamReducer as team } from './team';
import { seasonReducer as season } from './season';
import { store } from 'reduxStore';

const rootReducer = combineReducers({
  alert,
  auth,
  user,
  team,
  squad,
  player,
  results,
  result,
  season,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
