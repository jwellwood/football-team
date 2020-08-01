import React, { lazy } from 'react';
// Routes
import { visitor_routes } from 'router';
// Components
import SectionBackground from 'containers/SectionBackground';
import CustomContainer from 'containers/CustomContainer';
import Spinner from 'components/ui/loading/Spinner';
import ListWrapper from 'components/ui/lists/ListWrapper';
import CustomLinkButton from 'components/ui/buttons/CustomLinkButton';
import SectionContainer from 'containers/SectionContainer';
import CustomTypography from 'components/ui/text/CustomTypography';
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
