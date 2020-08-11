import React, { lazy, Suspense } from 'react';
// Components
import { ListWrapper } from 'components/lists';
import { CustomContainer, SectionBackground } from 'shared/layout/containers';
import { Placeholder } from 'components/typography';
import { Spinner } from 'components/loaders';
import { IResult } from 'shared/types';

const ResultCard = lazy(() => import('./ResultCard'));

interface Props {
  results: IResult[];
}

const ResultList: React.FC<Props> = ({ results }) => {
  return (
    <CustomContainer>
      <SectionBackground placeholder>
        <Suspense fallback={<Spinner />}>
          <ListWrapper dense>
            {results.length ? (
              results.map((result) => (
                <ResultCard key={result._id} result={result} />
              ))
            ) : (
              <Placeholder />
            )}
          </ListWrapper>
        </Suspense>
      </SectionBackground>
    </CustomContainer>
  );
};

export default ResultList;
