import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllResults } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';
import AdminResultsList from './AdminResultsList';

const AdminResultsListLogic = () => {
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);

  useEffect(() => {
    dispatch(getAllResults()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setResults(data);
    });
  }, [dispatch]);

  return <AdminResultsList results={results} />;
};

export default AdminResultsListLogic;
