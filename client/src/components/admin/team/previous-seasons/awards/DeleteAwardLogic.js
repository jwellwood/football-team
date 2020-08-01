import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// Routes
import { admin_routes } from 'router';
// Functions
import { deletePreviousAward } from 'reduxStore/team/team_actions';
import { onFormSubmit } from 'components/utils/form-controls';
// Components
import DeleteAward from './DeleteAward';

const DeleteAwardLogic = ({ awardId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const onDeleteAward = () =>
    onFormSubmit(
      setLoading,
      dispatch(deletePreviousAward(id, awardId)),
      dispatch,
      () => history.push(admin_routes.ADMIN_PREVIOUS_SEASON)
    );

  return <DeleteAward loading={loading} onDeleteAward={onDeleteAward} />;
};

export default DeleteAwardLogic;
