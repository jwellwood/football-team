import React from 'react';
import { useSelector } from 'react-redux';
import AdminResultsList from './AdminResultsList';

const AdminResultsListLogic = () => {
  const results = useSelector((state) => state.result.data) || [];

  return <AdminResultsList results={results} />;
};

export default AdminResultsListLogic;
