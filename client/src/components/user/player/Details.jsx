import React from 'react';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import ProfileList from 'components/ui/lists/ProfileList';
import CustomText from 'components/ui/text/CustomText';
import CustomDivider from 'components/ui/dividers/CustomDivider';

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
      <CustomText type='muted'>{description}</CustomText>
    </>
  );
};

export default Details;
