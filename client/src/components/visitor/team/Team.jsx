import React, { lazy, Suspense } from 'react';
// Layout
import GreyBackground from 'containers/GreyBackground';
import SectionTitle from 'components/ui/headers/SectionTitle';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import GridItem from 'components/ui/grids/GridItem';
import Spinner from 'components/ui/loading/Spinner';
// Sections
const TeamPhoto = lazy(() => import('components/ui/images/TeamPhoto'));
const TrophiesLogic = lazy(() => import('./trophies/TrophiesLogic'));
const HallOfFameLogic = lazy(() => import('./hall-of-fame/HallOfFameLogic'));
const PreviousSeasonsLogic = lazy(() =>
  import('./previous-seasons/PreviousSeasonsLogic')
);

const Team = ({ team }) => {
  const data = [
    { title: '', component: <TeamPhoto image={team.teamPhoto.url} /> },
    { title: 'Trophies', component: <TrophiesLogic team={team} /> },
    {
      title: 'Previous Seasons',
      component: <PreviousSeasonsLogic team={team} />,
    },
    { title: 'Hall of Fame', component: <HallOfFameLogic team={team} /> },
  ];
  return team ? (
    <CenteredGrid dir='row' item='flex-start'>
      {data.map((item) => (
        <GridItem key={item.title} item xs={12} sm={6}>
          <GreyBackground placeholder>
            <Suspense fallback={<Spinner isButton />}>
              <SectionTitle title={item.title} />
              {item.component}
            </Suspense>
          </GreyBackground>
        </GridItem>
      ))}
    </CenteredGrid>
  ) : (
    <Spinner />
  );
};

export default Team;
