import React, { lazy, Suspense } from 'react';
// Components
import CustomContainer from 'containers/CustomContainer';
import GreyBackground from 'containers/GreyBackground';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import Spinner from 'components/ui/loading/Spinner';

const GridButtons = lazy(() => import('./sections/GridButtons'));
const Title = lazy(() => import('./sections/Title'));
const HomeData = lazy(() => import('./sections/HomeData'));

const Home = ({ data, team, result }) => {
  const sections = [
    {
      component: <Title team={team} />,
    },
    { component: <HomeData team={team} result={result} /> },
    {
      component: (
        <CenteredGrid dir='row'>
          <GridButtons data={data} />
        </CenteredGrid>
      ),
    },
  ];

  return (
    <Suspense fallback={<Spinner isButton />}>
      <GreyBackground>
        {sections.map((section, i) => (
          <GreyBackground key={i} placeholder>
            <CustomContainer>{section.component}</CustomContainer>
          </GreyBackground>
        ))}
      </GreyBackground>
    </Suspense>
  );
};

export default Home;
