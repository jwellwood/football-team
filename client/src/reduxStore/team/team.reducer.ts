import { actionIds } from 'constants/actionIds';
import { initTeamState } from './initTeamState';

const initialState = { ...initTeamState };

type TeamState = typeof initialState;

interface Action {
  type: string;
  payload: TeamState;
}

export const teamReducer = (
  state: TeamState = { ...initialState },
  action: Action
): TeamState => {
  const { type, payload } = action;
  switch (type) {
    case actionIds.GET_TEAM:
      return handleTeamAction(state, payload);
    case actionIds.ADD_TEAM:
      return handleTeamAction(state, payload);
    case actionIds.UPDATE_TEAM_DETAILS:
      return handleTeamAction(state, payload);
    case actionIds.UPDATE_TEAM_PHOTO:
      return handleTeamAction(state, payload);
    case actionIds.ADD_NEW_TROPHY:
      return handleTeamAction(state, payload);
    case actionIds.DELETE_TROPHY:
      return handleTeamAction(state, payload);
    case actionIds.ADD_HALL_OF_FAMER:
      return handleTeamAction(state, payload);
    case actionIds.UPDATE_HALL_OF_FAMER:
      return handleTeamAction(state, payload);
    case actionIds.DELETE_HALL_OF_FAMER:
      return handleTeamAction(state, payload);
    case actionIds.UPLOAD_TEAM_PHOTO:
      return handleTeamAction(state, payload);
    case actionIds.REMOVE_ADMIN_IMAGE:
      return handleTeamAction(state, payload);
    default:
      return state;
  }
};

const handleTeamAction = (state: TeamState, payload: TeamState) => ({
  ...state,
  ...payload,
});
