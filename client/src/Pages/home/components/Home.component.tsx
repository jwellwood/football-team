import React, { lazy, Suspense } from 'react';
// Components
import CustomContainer from 'shared/layout/CustomContainer';
import SectionBackground from 'shared/layout/SectionBackground';
import Spinner from 'lib/components/loading/Spinner';
import { ITeam } from 'shared/types';

const HomeMenu = lazy(() => import('./HomeMenu'));
const Title = lazy(() => import('./Title'));
const LeagueInfo = lazy(() => import('../components/LeagueInfo'));

interface Props {
  team: ITeam;
}

const Home: React.FC<Props> = ({ team }) => {
  const sections = [
    { id: 1, component: <Title team={team} /> },
    { id: 2, component: <LeagueInfo team={team} /> },
    { id: 3, component: <HomeMenu /> },
  ];

  return (
    <Suspense fallback={<Spinner isButton />}>
      <SectionBackground>
        {sections.map(({ component, id }) => (
          <SectionBackground key={id} placeholder>
            <CustomContainer>{component}</CustomContainer>
          </SectionBackground>
        ))}
      </SectionBackground>
    </Suspense>
  );
};

export default Home;
