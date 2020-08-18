import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/results';
import { showAlert } from 'reduxStore/alert';
import AdminResultsList from '../components/AdminResultsList';
import { IResult } from 'shared/types';
import { AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  const dispatch: AppDispatch = useDispatch();
  const [results, setResults] = useState<IResult[]>([]);

  useEffect(() => {
    dispatch(getAllResults()).then((res: any) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showAlert(true, message, type));
      }
      setResults(data);
    });
  }, [dispatch]);

  return <AdminResultsList results={results} />;
};
