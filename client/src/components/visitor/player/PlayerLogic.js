import React, { useState, useEffect } from 'react';

import { getAllResults } from 'reduxStore/result/result_actions';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { showMessage } from 'reduxStore/app/message_actions';
import { getPlayerById } from 'reduxStore/squad/squad_actions';
// Components
import Spinner from 'lib/components/loading/Spinner';
import Player from './Player';

const PlayerLogic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // State
  const [player, setPlayer] = useState({});
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllResults()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setResults(data);
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPlayerById(id)).then((res) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setPlayer(data);
      } else {
        dispatch(showMessage(true, message, type));
      }
      setLoading(false);
    });
  }, [dispatch, id]);

  const resultsWithoutForfeits = results.filter((res) => !res.isForfeit);

  return !loading && player && results ? (
    <Player
      player={player}
      results={resultsWithoutForfeits}
      loading={loading}
    />
  ) : (
    <Spinner />
  );
};

export default PlayerLogic;
