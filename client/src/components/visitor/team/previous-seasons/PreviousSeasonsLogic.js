import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// Functions
import { getPreviousSeasons } from 'reduxStore/team/team_actions';
import { showMessage } from 'reduxStore/app/message_actions';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import PreviousSeason from './PreviousSeason';
import Spinner from 'components/ui/loading/Spinner';

const PreviousSeasonsLogic = () => {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
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

  return !loading ? (
    <ListWrapper>
      {seasons.map((season, i) => {
        return <PreviousSeason key={i} season={season} />;
      })}
    </ListWrapper>
  ) : (
    <Spinner isButton />
  );
};

export default PreviousSeasonsLogic;
