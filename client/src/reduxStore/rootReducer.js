import { combineReducers } from 'redux';

import { authReducer as auth } from './auth/auth_reducer';
import { userReducer as user } from './user/user_reducer';
import { appReducer as app } from './app/app_reducer';
import { resultReducer as result } from './result/result_reducer';
import { squadReducer as squad } from './squad/squad_reducer';
import { teamReducer as team } from './team/team_reducer';

const rootReducer = combineReducers({
  auth,
  user,
  app,
  team,
  squad,
  result,
});

export default rootReducer;
