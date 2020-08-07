import React from 'react';
// Internal
import ListWrapper from 'lib/components/lists/ListWrapper';
import HallOfFame from '../components/HallOfFame.component';
import SectionContainer from 'shared/layout/SectionContainer';
// TODO move this to stateful instead of props
export default ({ team }) => {
  const hallOfFame = team.hallOfFame;

  return (
    <ListWrapper>
      <SectionContainer title='Hall of Fame'>
        {hallOfFame.map((hallOfFamer) => {
          return <HallOfFame key={hallOfFamer._id} hallOfFamer={hallOfFamer} />;
        })}
      </SectionContainer>
    </ListWrapper>
  );
};
