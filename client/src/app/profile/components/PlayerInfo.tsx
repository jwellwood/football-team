import React from 'react';
// Components
import { ListWrapper } from 'components/lists';
import ProfileList from 'shared/layout/wrappers/ProfileList';
import { CustomDivider } from 'components/dividers';
import { CustomTypography } from 'components/typography';
import { IUserData } from 'shared/types';

interface Props {
  user: IUserData;
}

interface IInfoDetails {
  text: string;
  value: string | number;
  noDivider?: boolean;
}

const PlayerInfo: React.FC<Props> = ({
  user: { squadNumber, position, description, yearJoined },
}) => {
  const details: IInfoDetails[] = [
    { text: 'Number', value: squadNumber || '#', noDivider: true },
    { text: 'Position', value: position },
    { text: 'Joined', value: yearJoined },
  ];
  return (
    <>
      <ListWrapper>
        <ProfileList details={details} />
      </ListWrapper>
      <CustomDivider />
      <CustomTypography color='warning' font='secondary'>
        {description}
      </CustomTypography>
    </>
  );
};

export default PlayerInfo;
