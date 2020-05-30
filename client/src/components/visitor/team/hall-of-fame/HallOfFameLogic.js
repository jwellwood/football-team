import React from 'react';
// Internal
import ListWrapper from 'components/ui/lists/ListWrapper';
import HallOfFame from './HallOfFame';

const HallOfFameLogic = ({ team }) => {
  const hallOfFame = team.hallOfFame;

  return (
    <ListWrapper>
      {hallOfFame.map((hallOfFamer) => {
        return <HallOfFame key={hallOfFamer._id} hallOfFamer={hallOfFamer} />;
      })}
    </ListWrapper>
  );
};

export default HallOfFameLogic;
