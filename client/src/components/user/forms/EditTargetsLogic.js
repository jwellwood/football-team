import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// functions
import { updatePlayerTargets } from 'reduxStore/user/user_actions';
import { onInputChange, onFormSubmit } from 'shared/utils/form-controls';
// Routes
import { user_routes } from 'router';
// Components
import EditTargetsForm from './EditTargetsForm';

const EditTargetsLogic = () => {
  const user = useSelector((state) => state.auth.userData);
  const { appsTarget, goalsTarget, assistsTarget } = user;
  const dispatch = useDispatch();
  const history = useHistory();
  // State
  const initState = { appsTarget, goalsTarget, assistsTarget };
  const [input, setInput] = useState({ ...initState });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const dataToSubmit = { ...input };
  const onSubmit = (e) =>
    onFormSubmit(
      setLoading,
      dispatch(updatePlayerTargets(dataToSubmit)),
      dispatch,
      () => history.push(user_routes.PROFILE)
    );

  return (
    <EditTargetsForm
      onChange={onChange}
      onSubmit={onSubmit}
      loading={loading}
      input={input}
      user={user}
    />
  );
};

export default EditTargetsLogic;
