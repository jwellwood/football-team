import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPlayers } from 'reduxStore/squad/squad_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { IPlayer } from 'shared/types';
import { IPlayerByPosition } from '../shared/types';
import { Spinner } from 'components/loaders';
import SquadList from '../components/SquadList';
import { AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  const dispatch: AppDispatch = useDispatch();
  const [players, setPlayers] = useState<IPlayer[]>([]);
  useEffect(() => {
    dispatch(getAllPlayers()).then((res: any) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setPlayers(data);
    });
  }, [dispatch]);

  const filterBy = (pos: string): IPlayer[] =>
    players.filter((player: IPlayer) => player.position === pos);

  const playersByPosition: IPlayerByPosition[] = [
    {
      text: 'Goalkeepers',
      value: filterBy('GK'),
    },
    {
      text: 'Defenders',
      value: filterBy('DF'),
    },
    {
      text: 'Midfielders',
      value: filterBy('MF'),
    },
    {
      text: 'Forwards',
      value: filterBy('FW'),
    },
  ];

  return players ? (
    <SquadList players={players} playersByPosition={playersByPosition} />
  ) : (
    <Spinner />
  );
};
