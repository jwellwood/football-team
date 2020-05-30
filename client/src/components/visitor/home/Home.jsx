import React, { lazy, Suspense } from 'react';
// Components
import CustomContainer from 'containers/CustomContainer';
import GreyBackground from 'containers/GreyBackground';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import Spinner from 'components/ui/loading/Spinner';

const GridButtons = lazy(() => import('./sections/GridButtons'));
const Title = lazy(() => import('./sections/Title'));
const HomeData = lazy(() => import('./sections/HomeData'));

const Home = ({ data, team, results }) => {
  const sections = [
    {
      component: (
        // <GreyBackground placeholder>
        <Title team={team} />
        // </GreyBackground>
      ),
    },
    { component: <HomeData team={team} results={results} /> },
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
      {sections.map((section, i) => (
        <GreyBackground key={i} placeholder>
          <GreyBackground placeholder>
            <CustomContainer>{section.component}</CustomContainer>
          </GreyBackground>
        </GreyBackground>
      ))}
    </Suspense>
  );
};

export default Home;
