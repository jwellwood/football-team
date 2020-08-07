import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Routes
import { admin_routes } from 'router';
// Functions
import { deleteResult, getAllResults } from 'reduxStore/result/result_actions';
// Components
import DeleteResult from './DeleteResult';
import { onFormSubmit } from 'shared/utils/form-controls';

const DeleteResultLogic = ({ result }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const onDeleteResult = () =>
    onFormSubmit(
      setLoading,
      dispatch(deleteResult(result._id)),
      dispatch,
      () => {
        dispatch(getAllResults());
        history.push(admin_routes.ADMIN_RESULTS);
      }
    );

  const disabled = result.players.length ? true : false;

  return (
    <DeleteResult
      loading={loading}
      onDeleteResult={onDeleteResult}
      disabled={disabled}
    />
  );
};

export default DeleteResultLogic;
