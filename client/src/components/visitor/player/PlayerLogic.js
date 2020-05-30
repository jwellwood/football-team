import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import { showMessage } from 'reduxStore/app/message_actions';
import { getPlayerById } from 'reduxStore/squad/squad_actions';
// Components
import Spinner from 'components/ui/loading/Spinner';
import Player from './Player';

const PlayerLogic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allResults = useSelector((state) => state.result.data) || [];
  const results = allResults.filter((res) => !res.isForfeit);
  // State
  const [player, setPlayer] = useState({});
  const [loading, setLoading] = useState(true);

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

  return !loading ? (
    <Player player={player} results={results} loading={loading} />
  ) : (
    <Spinner />
  );
};

export default PlayerLogic;
