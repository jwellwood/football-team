import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { showMessage } from 'reduxStore/app/message_actions';
import { getPlayerById, getAllPlayers } from 'reduxStore/squad/squad_actions';
import {
  getResultById,
  addMatchPlayer,
} from 'reduxStore/result/result_actions';
// Routes
import { ADMIN_RESULTS } from 'router/route_names';
// Components
import AddMatchPlayerForm from './AddMatchPlayerForm';
import { onInputChange, onInputCheck } from 'components/utils/form-controls';

const inputFields = {
  player_id: '',
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

const AddMatchPlayersLogic = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    dispatch(getAllPlayers()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setPlayers(data);
    });
  }, [dispatch]);
  const [input, setInput] = useState({ ...inputFields });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
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

  const onChange = (e) => onInputChange(e, input, setInput);
  const onCheck = (e) => onInputCheck(e, input, setInput);

  const onSubmit = () => {
    setLoading(true);
    dispatch(getPlayerById(input.player_id)).then((res) => {
      const { success, message, type } = res.payload;
      if (success) {
        const dataToSubmit = { ...input };
        dispatch(addMatchPlayer(dataToSubmit, id)).then((res) => {
          const { success, message, type } = res.payload;
          if (success) {
            setLoading(false);
            dispatch(showMessage(true, message, type));
            history.push(`${ADMIN_RESULTS}/edit/${id}`);
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

export default AddMatchPlayersLogic;
