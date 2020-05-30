import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Functions
import { getPreviousSeasons } from 'reduxStore/team/team_actions';
import { showMessage } from 'reduxStore/app/message_actions';
// Components
import AdminPrevSeasonsList from './AdminPrevSeasonsList';
import Spinner from 'components/ui/loading/Spinner';

const AdminPrevListLogic = () => {
  const dispatch = useDispatch();
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getPreviousSeasons()).then((res) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setSeasons(data);
      } else {
        dispatch(showMessage(true, message, type));
      }
      setLoading(false);
    });
  }, [dispatch]);

  return !loading ? <AdminPrevSeasonsList seasons={seasons} /> : <Spinner />;
};

export default AdminPrevListLogic;
