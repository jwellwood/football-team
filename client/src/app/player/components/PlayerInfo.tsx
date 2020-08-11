import React from 'react';
import { SectionBackground } from 'shared/layout/containers';
import { IPlayer } from 'shared/types';
import { CenteredGrid, GridItem } from 'shared/layout/grids';
import { CircularImage } from 'components/images';
import ProfileList from 'shared/layout/wrappers/ProfileList';
import { ListWrapper } from 'components/lists';
import { CustomTypography } from 'components/typography';

interface Props {
  player: IPlayer;
}

interface IPlayerInfoData {
  text: string;
  value: string | number;
  noDivider?: boolean;
}

const DetailsOverview: React.FC<Props> = ({
  player: { squadNumber, position, image, description, yearJoined },
}) => {
  const data: IPlayerInfoData[] = [
    { text: 'Number', value: squadNumber, noDivider: true },
    { text: 'Position', value: position },
    { text: 'Joined', value: yearJoined },
  ];

  return (
    <SectionBackground>
      <CenteredGrid dir='row'>
        <GridItem sm={6}>
          <CircularImage image={image.url} isPlayer />
        </GridItem>
        <GridItem sm={6}>
          <ListWrapper>
            <ProfileList details={data} />
          </ListWrapper>
        </GridItem>
      </CenteredGrid>
      {description ? (
        <SectionBackground>
          <CustomTypography size='sm'>{description}</CustomTypography>
        </SectionBackground>
      ) : null}
    </SectionBackground>
  );
};

export default DetailsOverview;
