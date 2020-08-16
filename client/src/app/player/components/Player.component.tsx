import React, { lazy, Suspense } from 'react';
import { IPlayer, IResult } from 'shared/types';
import { Spinner } from 'components/loaders';
import { SectionTitle } from 'components/typography';
import { CustomTabs, ITab } from 'shared/layout/tabs';
import { CustomIcon } from 'lib/icons';

const PlayerResultsLogic = lazy(() =>
  import('../containers/PlayerResults.container')
);
const PlayerVersus = lazy(() => import('./PlayerVersus'));
const StatsOverviewLogic = lazy(() =>
  import('../containers/PlayerStats.container')
);
const PlayerPercentages = lazy(() =>
  import('../containers/PlayerPercentages.container')
);
const PlayerAverages = lazy(() =>
  import('../containers/PlayerAverages.container')
);
const PlayerTargets = lazy(() =>
  import('../containers/PlayerTargets.container')
);
const PlayerInfo = lazy(() => import('./PlayerInfo'));

interface Props {
  player: IPlayer;
  results: IResult[];
}

const Player: React.FC<Props> = ({ player, results }) => {
  const tabs: ITab[] = [
    {
      label: <CustomIcon icon='user' />,
      component: <PlayerInfo player={player} />,
    },
    {
      label: <CustomIcon icon='list-ul' />,
      component: (
        <>
          <PlayerResultsLogic player={player} />
          <StatsOverviewLogic player={player} />
        </>
      ),
    },
    {
      label: <CustomIcon icon='bullseye' />,
      component: (
        <>
          <PlayerTargets player={player} /> <PlayerVersus player={player} />
        </>
      ),
    },
    {
      label: <CustomIcon icon='chart-pie' />,
      component: (
        <>
          <PlayerPercentages results={results} player={player} />
          <PlayerAverages player={player} />
        </>
      ),
    },
  ];

  return (
    <>
      <SectionTitle title={player.name} main={true} />
      <Suspense fallback={<Spinner />}>
        <CustomTabs tabs={tabs} centered />
      </Suspense>
    </>
  );
};

export default Player;
