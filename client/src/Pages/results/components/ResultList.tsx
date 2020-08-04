import React, { lazy, Suspense } from 'react';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import SectionBackground from 'shared/layout/SectionBackground';
import CustomContainer from 'shared/layout/CustomContainer';
import PlaceholderText from 'components/ui/text/Placeholder';
import Spinner from 'lib/components/loading/Spinner';
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
              <PlaceholderText />
            )}
          </ListWrapper>
        </Suspense>
      </SectionBackground>
    </CustomContainer>
  );
};

export default ResultList;
