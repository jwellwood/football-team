import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import { getTeam, deleteHallOfFamer } from 'reduxStore/team/team_actions';
// Routes
import { admin_routes } from 'router';
// Internal
import DeleteHOF from './DeleteHOF';
import { onFormSubmit } from 'components/utils/form-controls';

const DeleteHOFLogic = ({ hof }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const team = useSelector((state) => state.team.teamData);
  // State
  const [loading, setLoading] = useState(false);

  const onDeleteHOF = () =>
    onFormSubmit(
      setLoading,
      dispatch(deleteHallOfFamer(team._id, hof._id)),
      dispatch,
      () => {
        dispatch(getTeam());
        history.push(admin_routes.ADMIN_HOF);
      }
    );

  return <DeleteHOF loading={loading} onDeleteHOF={onDeleteHOF} />;
};

export default DeleteHOFLogic;
