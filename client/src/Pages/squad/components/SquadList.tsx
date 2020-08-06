import React, { lazy } from 'react';
import { visitor_routes } from 'router';
import SectionContainer from 'shared/layout/SectionContainer';
import SectionBackground from 'shared/layout/SectionBackground';
import CustomContainer from 'shared/layout/CustomContainer';
import { IPlayer } from 'shared/types';
import { IPlayerByPosition } from '../shared/types';
import Spinner from 'lib/components/loading/Spinner';
import ListWrapper from 'lib/components/lists/ListWrapper';
import CustomLinkButton from 'lib/components/buttons/CustomLinkButton';
import CustomTypography from 'lib/components/typography/CustomTypography';

const PlayerListItem = lazy(() => import('./PlayerListItem'));

interface Props {
  players: IPlayer[];
  playersByPosition: IPlayerByPosition[];
}

const SquadList: React.FC<Props> = ({ players, playersByPosition }) => {
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
