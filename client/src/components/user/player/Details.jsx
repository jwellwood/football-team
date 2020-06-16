import React from 'react';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import ProfileList from 'components/ui/lists/ProfileList';
import CustomDivider from 'components/ui/dividers/CustomDivider';
import CustomTypography from 'components/ui/text/CustomTypography';

const Details = ({ user }) => {
  const { squadNumber, position, description, yearJoined } = user;
  const details = [
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

export default Details;
