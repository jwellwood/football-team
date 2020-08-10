import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTeam, deleteHallOfFamer } from 'reduxStore/team/team_actions';
import { admin_routes } from 'router';
import { IHallOfFame, ITeam } from 'shared/types';
import { onFormSubmit } from 'utils/form-controls';
import DeleteHOF from '../components/DeleteHallOfFame.component';
import { RootState } from 'reduxStore/rootReducer';

interface Props {
  hof: IHallOfFame;
}

export default ({ hof }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const team: ITeam = useSelector((state: RootState) => state.team.teamData);
  // State
  const [loading, setLoading] = useState<boolean>(false);

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
