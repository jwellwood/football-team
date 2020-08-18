import axios from 'axios';
import { actionIds } from 'constants/actionIds';
import { resultAPIRoutes as api } from 'constants/api';

// 1 GET    / GET_ALL_RESULTS / getAllResults

export const getAllResults = () => {
  const request = axios.get(api.GET_ALL_RESULTS_ROUTE).then((res) => res.data);
  return {
    type: actionIds.GET_ALL_RESULTS,
    payload: request,
  };
};
