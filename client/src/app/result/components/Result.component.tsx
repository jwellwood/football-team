import React, { lazy, Suspense, ReactElement } from 'react';
import { SectionBackground } from 'shared/layout/containers';
import { IResult } from 'shared/types';
import { Spinner } from 'components/loaders';
import { CenteredGrid, GridItem } from 'shared/layout/grids';
import { SectionTitle } from 'components/typography';

const ScoreBox = lazy(() => import('./ScoreBox'));
const MatchPlayers = lazy(() => import('./MatchPlayers'));
const MatchReport = lazy(() => import('./MatchReport'));
const MvpDisplay = lazy(() => import('./MvpDisplay'));

interface Props {
  result: IResult;
}

interface IResultSectionData {
  title: string;
  component: ReactElement;
}

const Result: React.FC<Props> = ({ result }) => {
  const { players } = result;
  const mvp = players.filter((pl) => pl.mvp);

  const sections: IResultSectionData[] = [
    { title: '', component: <ScoreBox result={result} /> },
    { title: 'Players', component: <MatchPlayers result={result} /> },
    { title: 'MVP', component: <MvpDisplay mvp={mvp} /> },
    { title: 'Match Report', component: <MatchReport result={result} /> },
  ];

  return (
    <SectionBackground placeholder>
      <CenteredGrid dir='row' item='flex-start'>
        {sections.map((section, i: number) => (
          <GridItem key={section.title + i}>
            <SectionBackground>
              <Suspense fallback={<Spinner isSecondary />}>
                <SectionTitle title={section.title} />
                {section.component}
              </Suspense>
            </SectionBackground>
          </GridItem>
        ))}
      </CenteredGrid>
    </SectionBackground>
  );
};

export default Result;
