import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Routes
import { admin_routes } from 'router';
// Functions
import { deletePreviousSeason } from 'reduxStore/team/team_actions';
import { onFormSubmit } from 'shared/utils/form-controls';
// Components
import DeletePrevSeason from './DeletePrevSeason';

const DeletePrevSeasonLogic = ({ season }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onDeleteSeason = () =>
    onFormSubmit(
      setLoading,
      dispatch(deletePreviousSeason(season._id)),
      dispatch,
      () => history.push(admin_routes.ADMIN_PREVIOUS_SEASON)
    );

  return <DeletePrevSeason loading={loading} onDeleteSeason={onDeleteSeason} />;
};

export default DeletePrevSeasonLogic;
