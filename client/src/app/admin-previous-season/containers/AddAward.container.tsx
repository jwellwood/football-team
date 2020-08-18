import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addPreviousAward } from 'reduxStore/season';
import { onInputChange, onFormSubmit } from 'utils/form-controls';
import { admin_routes } from 'router';
import AddAwardForm from '../forms/AwardForm';
import { IAward } from 'shared/types';
import { $initAwardFormState } from '../shared/state';
import { AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [input, setInput] = useState<IAward>({ ...$initAwardFormState });
  const [hasNumericValue, setHasNumericValue] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const onCheck = () => setHasNumericValue(!hasNumericValue);
  const dataToSubmit: IAward = { ...input };
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
