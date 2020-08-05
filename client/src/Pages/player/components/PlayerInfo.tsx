import React from 'react';
import SectionBackground from 'shared/layout/SectionBackground';
import { IPlayer } from 'shared/types';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import GridItem from 'lib/components/grids/GridItem';
import CircularImage from 'lib/components/images/CircularImage';
import ProfileList from 'components/ui/lists/ProfileList';
import ListWrapper from 'lib/components/lists/ListWrapper';
import CustomTypography from 'lib/components/typography/CustomTypography';

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
