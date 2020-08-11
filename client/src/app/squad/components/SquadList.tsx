import React, { lazy } from 'react';
import { visitor_routes } from 'router';
import {
  CustomContainer,
  SectionBackground,
  SectionContainer,
} from 'shared/layout/containers';
import { IPlayer } from 'shared/types';
import { IPlayerByPosition } from '../shared/types';
import { Spinner } from 'components/loaders';
import { ListWrapper } from 'components/lists';
import { CustomLinkButton } from 'components/buttons';
import { CustomTypography } from 'components/typography';

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
                <React.Suspense fallback={<Spinner isSecondary />}>
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
