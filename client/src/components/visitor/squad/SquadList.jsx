import React, { lazy } from 'react';
// Routes
import { visitor_routes } from 'router';
// Components
import SectionBackground from 'shared/layout/SectionBackground';
import CustomContainer from 'shared/layout/CustomContainer';
import Spinner from 'lib/components/loading/Spinner';
import ListWrapper from 'lib/components/lists/ListWrapper';
import CustomLinkButton from 'lib/components/buttons/CustomLinkButton';
import SectionContainer from 'shared/layout/SectionContainer';
import CustomTypography from 'lib/components/typography/CustomTypography';
// Lazy
const PlayerListItem = lazy(() => import('./PlayerListItem'));

const SquadList = ({ players, playersByPosition }) => {
  return (
    <CustomContainer>
      <SectionBackground placeholder>
        <CustomLinkButton link={visitor_routes.PLAYERS_STATS} type='contained'>
          Stats
        </CustomLinkButton>
        <ListWrapper>
          {players ? (
            playersByPosition.map((item) => (
              <div key={item.text}>
                <React.Suspense fallback={<Spinner isButton />}>
                  <SectionContainer title={item.text.toUpperCase()}>
                    {item.value.map((player) => (
                      <PlayerListItem key={player._id} player={player} />
                    ))}
                  </SectionContainer>
                </React.Suspense>
              </div>
            ))
          ) : (
            <CustomTypography>No players</CustomTypography>
          )}
        </ListWrapper>
      </SectionBackground>
    </CustomContainer>
  );
};

export default SquadList;
