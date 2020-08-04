import React from 'react';
// Internal
import ListWrapper from 'components/ui/lists/ListWrapper';
import HallOfFame from '../components/HallOfFame.component';
// TODO move this to stateful instead of props
export default ({ team }) => {
  const hallOfFame = team.hallOfFame;

  return (
    <ListWrapper>
      {hallOfFame.map((hallOfFamer) => {
        return <HallOfFame key={hallOfFamer._id} hallOfFamer={hallOfFamer} />;
      })}
    </ListWrapper>
  );
};
