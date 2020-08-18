import axios from 'axios';
import { actionIds } from 'constants/actionIds';
import { squadAPIRoutes as api } from 'constants/api';

export const getPlayerById = (id: string) => {
  const request = axios
    .get(`${api.GET_PLAYER_ROUTE}/${id}`)
    .then((res) => res.data);
  return {
    type: actionIds.GET_PLAYER_BY_ID,
    payload: request,
  };
};
