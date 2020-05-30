import axios from 'axios';
import { PUBLIC_SERVER } from '../types/routes';
import { GET_ALL_PLAYERS, GET_PLAYER_BY_ID } from '../types';

export function getAllPlayers() {
  const request = axios
    .get(`${PUBLIC_SERVER}/get_all_players`)
    .then(res => res.data);
  return {
    type: GET_ALL_PLAYERS,
    payload: request
  };
}

export function getPlayerById(id) {
  const request = axios
    .get(`${PUBLIC_SERVER}/get_player_by_id/${id}`)
    .then(res => res.data);
  return {
    type: GET_PLAYER_BY_ID,
    payload: request
  };
}
