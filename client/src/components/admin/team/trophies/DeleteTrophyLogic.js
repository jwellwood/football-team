import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import { getTeam, deleteTrophy } from 'reduxStore/team/team_actions';
import { onFormSubmit } from 'components/utils/form-controls';
// Routes
import { ADMIN_TROPHIES } from 'router/route_names';
// Components
import DeleteTrophy from './DeleteTrophy';

const DeleteTrophyLogic = ({ trophy }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const team = useSelector((state) => state.team.teamData);
  // State
  const [loading, setLoading] = useState(false);

  const onDeleteTrophy = () =>
    onFormSubmit(
      setLoading,
      dispatch(deleteTrophy(team._id, trophy._id)),
      dispatch,
      () => {
        dispatch(getTeam());
        history.push(ADMIN_TROPHIES);
      }
    );

  return <DeleteTrophy loading={loading} onDeleteTrophy={onDeleteTrophy} />;
};

export default DeleteTrophyLogic;
