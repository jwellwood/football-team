import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { admin_routes } from 'router';
import { deletePreviousSeason } from 'reduxStore/team/team_actions';
import { onFormSubmit } from 'shared/utils/form-controls';
import { IPreviousSeason } from 'shared/types';
import DeletePrevSeason from '../components/DeletePreviousSeason.component';

interface Props {
  season: IPreviousSeason;
}

export default ({ season }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

  const onDeleteSeason = () =>
    onFormSubmit(
      setLoading,
      dispatch(deletePreviousSeason(season._id)),
      dispatch,
      () => history.push(admin_routes.ADMIN_PREVIOUS_SEASON)
    );

  return <DeletePrevSeason loading={loading} onDeleteSeason={onDeleteSeason} />;
};
