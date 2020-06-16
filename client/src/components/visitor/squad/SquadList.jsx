import React, { lazy } from 'react';
// Routes
import { PLAYERS_STATS } from 'router/route_names';
// Components
import GreyBackground from 'containers/GreyBackground';
import CustomContainer from 'containers/CustomContainer';
import Spinner from 'components/ui/loading/Spinner';
import ListWrapper from 'components/ui/lists/ListWrapper';
import CustomText from 'components/ui/text/CustomText';
import CustomLinkButton from 'components/ui/buttons/CustomLinkButton';
import SectionContainer from 'containers/SectionContainer';
// Lazy
const PlayerListItem = lazy(() => import('./PlayerListItem'));

const SquadList = ({ players, playersByPosition }) => {
  return (
    <CustomContainer>
      <GreyBackground placeholder>
        <CustomLinkButton link={PLAYERS_STATS} type='contained'>
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
            <CustomText type='placeholder' text='no players' />
          )}
        </ListWrapper>
      </GreyBackground>
    </CustomContainer>
  );
};

export default SquadList;
