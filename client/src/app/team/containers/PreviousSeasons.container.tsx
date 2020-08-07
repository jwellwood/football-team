import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// Functions
import { getPreviousSeasons } from 'reduxStore/team/team_actions';
import { showMessage } from 'reduxStore/app/message_actions';
// Components
import ListWrapper from 'lib/components/lists/ListWrapper';
import PreviousSeason from '../components/PreviousSeason';
import Spinner from 'lib/components/loading/Spinner';
import SectionContainer from 'shared/layout/SectionContainer';
import { IPreviousSeason } from 'shared/types';

export default () => {
  const [seasons, setSeasons] = useState<IPreviousSeason[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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
    <SectionContainer title='Previous Seasons'>
      <ListWrapper>
        {seasons.map((season: IPreviousSeason, i) => {
          return <PreviousSeason key={i} season={season} />;
        })}
      </ListWrapper>
    </SectionContainer>
  ) : (
    <Spinner isButton />
  );
};
