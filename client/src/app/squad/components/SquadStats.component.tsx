import React, { lazy, Suspense } from 'react';
import { CustomTabs, ITab } from 'shared/layout/tabs';
import { IResult, IPlayer } from 'shared/types';
import { CustomIcon } from 'lib/icons';
import { Spinner } from 'components/loaders';
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

const SquadStats: React.FC<Props> = ({ results, players }) => {
  const tabs: ITab[] = [
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
    <Suspense fallback={<Spinner isSecondary />}>
      <CustomTabs tabs={tabs} />
    </Suspense>
  );
};

export default SquadStats;
