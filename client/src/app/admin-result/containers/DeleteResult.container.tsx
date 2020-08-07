import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { admin_routes } from 'router';
import { deleteResult, getAllResults } from 'reduxStore/result/result_actions';
import { onFormSubmit } from 'shared/utils/form-controls';
import { IResult } from 'shared/types';
import DeleteResult from '../components/DeleteResult.component';

interface Props {
  result: IResult;
}

export default ({ result }: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);

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

  const disabled: boolean = result.players.length ? true : false;

  return (
    <DeleteResult
      loading={loading}
      onDeleteResult={onDeleteResult}
      disabled={disabled}
    />
  );
};
