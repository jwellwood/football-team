import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import { updatePlayerDetails } from 'reduxStore/user/user_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
// Routes
import { user_routes } from 'router';
// Internal
import EditPlayerForm from './EditPlayerForm';

const EditPlayerLogic = () => {
  const user = useSelector((state) => state.auth.userData);
  const { name, position, squadNumber, yearJoined, description } = user;
  const dispatch = useDispatch();
  const history = useHistory();
  // State
  const [input, setInput] = useState({
    name,
    squadNumber,
    position,
    yearJoined,
    description,
  });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const dataToSubmit = { ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updatePlayerDetails(dataToSubmit)),
      dispatch,
      () => history.push(user_routes.PROFILE)
    );

  const disabled =
    input.name === name &&
    +input.squadNumber === +squadNumber &&
    input.position === position &&
    input.description === description;

  return (
    <EditPlayerForm
      loading={loading}
      disabled={disabled}
      input={input}
      user={user}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default EditPlayerLogic;
