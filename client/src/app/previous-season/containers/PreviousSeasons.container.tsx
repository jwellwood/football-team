import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
// Functions
import { getPreviousSeasons } from 'reduxStore/season';
import { showAlert } from 'reduxStore/alert';
// Components
import { ListWrapper } from 'components/lists';
import PreviousSeason from '../components/PreviousSeason';
import { Spinner } from 'components/loaders';
import { SectionContainer } from 'shared/layout/containers';
import { IPreviousSeason } from 'shared/types';
import { AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  const [seasons, setSeasons] = useState<IPreviousSeason[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getPreviousSeasons()).then((res: any) => {
      console.log(res);
      const { success, data, message, type } = res.payload;
      if (success) {
        setSeasons(data);
      } else {
        dispatch(showAlert(true, message, type));
      }
      setLoading(false);
    });
  }, [dispatch]);

  return !loading ? (
    <SectionContainer title='Previous Seasons'>
      <ListWrapper>
        {seasons.map((season: IPreviousSeason, i: number) => {
          return <PreviousSeason key={i} season={season} />;
        })}
      </ListWrapper>
    </SectionContainer>
  ) : (
    <Spinner isSecondary />
  );
};
