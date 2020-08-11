import React, { lazy, Suspense } from 'react';
// Components
import { CustomContainer, SectionBackground } from 'shared/layout/containers';
import { Spinner } from 'components/loaders';
import { ITeam } from 'shared/types';

const HomeMenu = lazy(() => import('./HomeMenu'));
const Title = lazy(() => import('./Title'));
const LeagueInfo = lazy(() => import('./LeagueInfo'));

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
    <Suspense fallback={<Spinner isSecondary />}>
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
