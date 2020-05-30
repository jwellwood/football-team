import React from 'react';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import Trophies from './Trophies';

const TrophiesLogic = ({ team }) => {
  const trophies = team.trophies.sort((a, b) => (a.year > b.year ? -1 : 1));

  return (
    <ListWrapper>
      <Trophies trophies={trophies} />
    </ListWrapper>
  );
};

export default TrophiesLogic;
