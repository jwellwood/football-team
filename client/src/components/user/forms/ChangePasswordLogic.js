import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Functions
import {
  checkCurrentPassword,
  updatePassword,
} from 'reduxStore/auth/auth_actions';
import { onInputChange, onFormSubmit } from 'components/utils/form-controls';
// Routes
import { PROFILE } from 'router/route_names';
// Components
import ChangePasswordForm from './ChangePasswordForm';

const ChangePasswordLogic = () => {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const history = useHistory();
  // State
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const currentData = { ...input };
  const onSubmitCurrent = () =>
    onFormSubmit(
      setLoading,
      dispatch(checkCurrentPassword(currentData)),
      dispatch,
      () => setOpen(true)
    );

  const newData = { ...input, user };
  const onSubmitNew = () =>
    onFormSubmit(setLoading, dispatch(updatePassword(newData)), dispatch, () =>
      history.push(PROFILE)
    );

  return (
    <ChangePasswordForm
      onSubmitCurrent={onSubmitCurrent}
      onSubmitNew={onSubmitNew}
      loading={loading}
      open={open}
      onChange={onChange}
      input={input}
    />
  );
};

export default ChangePasswordLogic;
