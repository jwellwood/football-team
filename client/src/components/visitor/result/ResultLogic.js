import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { getResultById } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
// Components
import Result from './Result';
import Spinner from 'components/ui/loading/Spinner';

const ResultLogic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
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

export default ResultLogic;
