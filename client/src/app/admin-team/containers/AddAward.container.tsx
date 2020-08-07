import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPreviousAward } from 'reduxStore/team/team_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
import { admin_routes } from 'router';
import AddAwardForm from '../components/AwardForm';
import { ISeasonAward } from 'shared/types';
import { $initAwardFormState } from '../shared/state';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<ISeasonAward>({ ...$initAwardFormState });
  const [hasNumericValue, setHasNumericValue] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const onCheck = () => setHasNumericValue(!hasNumericValue);
  const dataToSubmit: ISeasonAward = { ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(addPreviousAward(dataToSubmit, id)),
      dispatch,
      () => history.push(admin_routes.ADMIN_PREVIOUS_SEASON)
    );

  return (
    <div>
      <AddAwardForm
        loading={loading}
        hasNumericValue={hasNumericValue}
        onChange={onChange}
        onCheck={onCheck}
        onSubmit={onSubmit}
      />
    </div>
  );
};
