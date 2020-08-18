import axios from 'axios';
import { actionIds } from 'constants/actionIds';
import { squadAPIRoutes as api } from 'constants/api';

export const getAllPlayers = () => {
  const request = axios.get(api.GET_ALL_PLAYERS_ROUTE).then((res) => res.data);
  return {
    type: actionIds.GET_ALL_PLAYERS,
    payload: request,
  };
};
