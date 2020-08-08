import { IResult, IPlayer } from 'shared/types';

export const matchPlayerOptions: Function = (
  result: IResult,
  players: IPlayer[]
) => {
  const matchPlayerIds: string[] = result.players
    ? result.players.map((player) => player.player_id._id)
    : [];
  const unselectedPlayers: IPlayer[] = players.filter(
    (player) => !matchPlayerIds.includes(player._id)
  );

  const playerList = unselectedPlayers.map((player) => ({
    text: player.name,
    value: player._id,
  }));

  return [{ text: '', value: '' }, ...playerList];
};
