import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTeam, deleteTrophy } from 'reduxStore/team/team_actions';
import { onFormSubmit } from 'utils/form-controls';
import { admin_routes } from 'router';
import { ITrophy, ITeam } from 'shared/types';
import DeleteTrophy from '../components/DeleteTrophy.component';

interface Props {
  trophy: ITrophy;
}

export default ({ trophy }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const team: ITeam = useSelector((state) => state.team.teamData);
  // State
  const [loading, setLoading] = useState<boolean>(false);

  const onDeleteTrophy = () =>
    onFormSubmit(
      setLoading,
      dispatch(deleteTrophy(team._id, trophy._id)),
      dispatch,
      () => {
        dispatch(getTeam());
        history.push(admin_routes.ADMIN_TROPHIES);
      }
    );

  return <DeleteTrophy loading={loading} onDeleteTrophy={onDeleteTrophy} />;
};
