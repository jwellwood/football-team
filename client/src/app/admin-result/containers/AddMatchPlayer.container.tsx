import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showMessage } from 'reduxStore/app/message_actions';
import { getPlayerById, getAllPlayers } from 'reduxStore/squad/squad_actions';
import {
  getResultById,
  addMatchPlayer,
} from 'reduxStore/result/result_actions';
import { admin_routes } from 'router';
import { onInputChange, onInputCheck } from 'shared/utils/form-controls';
import { IPlayer, IResult, IMatchPlayerID } from 'shared/types';
import AddMatchPlayerForm from '../components/AddMatchPlayerForm';

interface IMatchPlayerInput {
  player_id: IMatchPlayerID;
  mvp: boolean;
  redCard: boolean;
  goals: number;
  assists: number;
  conceded: number;
  ownGoals: number;
  yellowCards: number;
  pensScored: number;
  pensMissed: number;
}

const inputFields: IMatchPlayerInput = {
  player_id: null,
  goals: 0,
  assists: 0,
  mvp: false,
  conceded: 0,
  ownGoals: 0,
  yellowCards: 0,
  redCard: false,
  pensScored: 0,
  pensMissed: 0,
};

export default () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [input, setInput] = useState<IMatchPlayerInput>({ ...inputFields });
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<IResult>(null);

  useEffect(() => {
    dispatch(getAllPlayers()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setPlayers(data);
    });
  }, [dispatch]);
  // Get result id to add the players to
  useEffect(() => {
    dispatch(getResultById(id)).then((res) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setResult(data);
      } else {
        showMessage(true, message, type);
      }
    });
  }, [dispatch, id]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputCheck(e, input, setInput);

  const onSubmit = () => {
    setLoading(true);
    dispatch(getPlayerById(input.player_id)).then((res) => {
      const { success, message, type } = res.payload;
      if (success) {
        const dataToSubmit: IMatchPlayerInput = { ...input };
        dispatch(addMatchPlayer(dataToSubmit, id)).then((res) => {
          const { success, message, type } = res.payload;
          if (success) {
            setLoading(false);
            dispatch(showMessage(true, message, type));
            history.push(`${admin_routes.ADMIN_RESULTS}/edit/${id}`);
          } else {
            dispatch(showMessage(true, message, type));
            setLoading(false);
          }
        });
      } else {
        dispatch(showMessage(true, message, type));
        setLoading(false);
      }
    });
  };

  return (
    <AddMatchPlayerForm
      loading={loading}
      onSubmit={onSubmit}
      onChange={onChange}
      onCheck={onCheck}
      players={players}
      result={result}
      input={input}
    />
  );
};
