import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { admin_routes } from 'router';
import { deletePreviousAward } from 'reduxStore/team/team_actions';
import { onFormSubmit } from 'shared/utils/form-controls';
import DeleteAward from '../components/DeleteAward.component';

interface Props {
  awardId: string;
}

export default ({ awardId }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  const onDeleteAward = () =>
    onFormSubmit(
      setLoading,
      dispatch(deletePreviousAward(id, awardId)),
      dispatch,
      () => history.push(admin_routes.ADMIN_PREVIOUS_SEASON)
    );

  return <DeleteAward loading={loading} onDeleteAward={onDeleteAward} />;
};
