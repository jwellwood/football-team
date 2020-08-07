import React from 'react';
// Components
import ListWrapper from 'lib/components/lists/ListWrapper';
import Trophies from './TrophiesTable';
import { ITrophy, ITeam } from 'shared/types';

interface Props {
  team: ITeam;
}

const TrophiesList: React.FC<Props> = ({ team }) => {
  const trophies: ITrophy[] = team.trophies.sort((a, b) =>
    a.year > b.year ? -1 : 1
  );

  return (
    <ListWrapper>
      <Trophies trophies={trophies} />
    </ListWrapper>
  );
};

export default TrophiesList;
