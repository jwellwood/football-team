import React, { lazy, Suspense, ReactElement } from 'react';
// Layout
import Spinner from 'lib/components/loading/Spinner';
import CustomTabs from 'lib/components/tabs/CustomTabs';
import CustomIcon from 'lib/components/icons/CustomIcon';
import { IResult, IPlayer } from 'shared/types';
// Components
const SquadTargetTable = lazy(() =>
  import('../containers/SquadTargetTable.container')
);
const Leaderboard = lazy(() => import('../containers/Leaderboard.container'));
const SquadTargets = lazy(() => import('../containers/SquadTargets.container'));

interface Props {
  results: IResult[];
  players: IPlayer[];
}

interface ISquadStatsTabs {
  label: ReactElement;
  component: ReactElement;
}

const SquadStats: React.FC<Props> = ({ results, players }) => {
  const tabs: ISquadStatsTabs[] = [
    {
      label: <CustomIcon icon='star' />,
      component: <Leaderboard results={results} players={players} />,
    },
    {
      label: <CustomIcon icon='bullseye' />,
      component: <SquadTargetTable players={players} />,
    },
    {
      label: <CustomIcon icon='shield-alt' />,
      component: <SquadTargets players={players} />,
    },
  ];

  return (
    <Suspense fallback={<Spinner isButton />}>
      <CustomTabs tabs={tabs} />
    </Suspense>
  );
};

export default SquadStats;
