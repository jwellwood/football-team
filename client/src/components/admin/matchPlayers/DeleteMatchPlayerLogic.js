import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { deleteMatchPlayer } from 'reduxStore/result/result_actions';
import { onFormSubmit } from 'components/utils/form-controls';
// Routes
import { ADMIN_RESULTS } from 'router/route_names';
// Components
import DeleteMatchPlayer from './DeleteMatchPlayer';

const DeleteMatchPlayerLogic = ({ matchPlayerId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const onDeleteMatchPlayer = () =>
    onFormSubmit(
      setLoading,
      dispatch(deleteMatchPlayer(id, matchPlayerId)),
      dispatch,
      () => history.push(ADMIN_RESULTS)
    );

  return (
    <DeleteMatchPlayer
      loading={loading}
      onDeleteMatchPlayer={onDeleteMatchPlayer}
    />
  );
};

export default DeleteMatchPlayerLogic;
