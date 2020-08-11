import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteMatchPlayer } from 'reduxStore/result/result_actions';
import { onFormSubmit } from 'utils/form-controls';
import { admin_routes } from 'router';
import DeleteMatchPlayer from '../components/DeleteMatchPlayer.component';
import { AppDispatch } from 'reduxStore/rootReducer';

interface Props {
  matchPlayerId: string;
}

export default ({ matchPlayerId }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  const onDeleteMatchPlayer = () =>
    onFormSubmit(
      setLoading,
      dispatch(deleteMatchPlayer(id, matchPlayerId)),
      dispatch,
      () => history.push(admin_routes.ADMIN_RESULTS)
    );

  return (
    <DeleteMatchPlayer
      loading={loading}
      onDeleteMatchPlayer={onDeleteMatchPlayer}
    />
  );
};
