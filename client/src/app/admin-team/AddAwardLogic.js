import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { addPreviousAward } from 'reduxStore/team/team_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
// Routes
import { admin_routes } from 'router';
// Components
import AddAwardForm from './AddAwardForm';

const AddAwardLogic = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({});
  const [hasNumericValue, setHasNumericValue] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const onCheck = () => setHasNumericValue(!hasNumericValue);
  const dataToSubmit = { ...input };
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

export default AddAwardLogic;
