import React from 'react';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import Trophies from './TrophiesTable';
import { ITrophyData, ITeamData } from 'shared/types';

interface Props {
  team: ITeamData;
}

const TrophiesList: React.FC<Props> = ({ team }) => {
  const trophies: ITrophyData[] = team.trophies.sort((a, b) =>
    a.year > b.year ? -1 : 1
  );

  return (
    <ListWrapper>
      <Trophies trophies={trophies} />
    </ListWrapper>
  );
};

export default TrophiesList;
