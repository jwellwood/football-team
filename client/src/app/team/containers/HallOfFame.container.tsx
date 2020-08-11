import React from 'react';
// Internal
import { ListWrapper } from 'components/lists';
import HallOfFame from '../components/HallOfFame.component';
import { SectionContainer } from 'shared/layout/containers';
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
