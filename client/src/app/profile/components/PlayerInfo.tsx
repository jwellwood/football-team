import React from 'react';
// Components
import ListWrapper from 'lib/components/lists/ListWrapper';
import ProfileList from 'lib/components/wrappers/ProfileList';
import CustomDivider from 'lib/components/dividers/CustomDivider';
import CustomTypography from 'lib/components/typography/CustomTypography';
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
