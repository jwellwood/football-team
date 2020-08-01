import React, { lazy, Suspense } from 'react';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import SectionBackground from 'containers/SectionBackground';
import CustomContainer from 'containers/CustomContainer';
import PlaceholderText from 'components/ui/text/Placeholder';
import Spinner from 'components/ui/loading/Spinner';

const ResultCard = lazy(() => import('./ResultCard'));

const ResultList = ({ results }) => {
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
