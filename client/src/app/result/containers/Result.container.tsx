import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getResultById } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import { IResult } from 'shared/types';
import Spinner from 'lib/components/loading/Spinner';
import Result from '../components/Result.component';

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [result, setResult] = useState<IResult>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    dispatch(getResultById(id)).then((res) => {
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
