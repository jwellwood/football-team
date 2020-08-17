import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showAlert } from 'reduxStore/alert';
import { getPlayerById, getAllPlayers } from 'reduxStore/squad';
import { getResultById, addMatchPlayer } from 'reduxStore/result';
import { admin_routes } from 'router';
import { onInputChange, onInputCheck } from 'utils/form-controls';
import { IPlayer, IResult, IResultPlayerStats } from 'shared/types';
import AddMatchPlayerForm from '../components/AddMatchPlayerForm';
import { $initResultData } from 'app/result/shared/initResultData';
import { AppDispatch } from 'reduxStore/rootReducer';

const inputFields: IResultPlayerStats = {
  player_id: { name: '', _id: '' },
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
  const dispatch: AppDispatch = useDispatch();
  const [players, setPlayers] = useState<IPlayer[]>([]);
  const [input, setInput] = useState<IResultPlayerStats>({
    ...inputFields,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<IResult>({ ...$initResultData });

  useEffect(() => {
    dispatch(getAllPlayers()).then((res: any) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showAlert(true, message, type));
      }
      setPlayers(data);
    });
  }, [dispatch]);
  // Get result id to add the players to
  useEffect(() => {
    dispatch(getResultById(id)).then((res: any) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setResult(data);
      } else {
        showAlert(true, message, type);
      }
    });
  }, [dispatch, id]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputCheck(e, input, setInput);

  const onSubmit = () => {
    setLoading(true);
    dispatch(getPlayerById(input.player_id._id)).then((res: any) => {
      const { success, message, type } = res.payload;
      if (success) {
        const dataToSubmit: IResultPlayerStats = { ...input };
        dispatch(addMatchPlayer(dataToSubmit, id)).then((res: any) => {
          const { success, message, type } = res.payload;
          if (success) {
            setLoading(false);
            dispatch(showAlert(true, message, type));
            history.push(`${admin_routes.ADMIN_RESULTS}/edit/${id}`);
          } else {
            dispatch(showAlert(true, message, type));
            setLoading(false);
          }
        });
      } else {
        dispatch(showAlert(true, message, type));
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
