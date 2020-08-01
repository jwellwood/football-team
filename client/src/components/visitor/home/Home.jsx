import React, { lazy, Suspense } from 'react';
// Components
import CustomContainer from 'containers/CustomContainer';
import SectionBackground from 'containers/SectionBackground';
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
      <SectionBackground>
        {sections.map((section, i) => (
          <SectionBackground key={i} placeholder>
            <CustomContainer>{section.component}</CustomContainer>
          </SectionBackground>
        ))}
      </SectionBackground>
    </Suspense>
  );
};

export default Home;
