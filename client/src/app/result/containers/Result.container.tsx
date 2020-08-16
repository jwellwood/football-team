import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getResultById } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { IResult } from 'shared/types';
import { Spinner } from 'components/loaders';
import Result from '../components/Result.component';
import { AppDispatch } from 'reduxStore/rootReducer';
import { $initResultData } from 'app/result/shared/initResultData';

export default () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const [result, setResult] = useState<IResult>({ ...$initResultData });
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    dispatch(getResultById(id)).then((res: any) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setResult(data);
      } else {
        dispatch(showMessage(true, message, type));
      }
      setLoading(false);
    });
  }, [dispatch, id]);

  return !loading ? <Result result={result} /> : <Spinner />;
};
