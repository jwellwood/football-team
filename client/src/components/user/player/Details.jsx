import React from 'react';
// Components
import ListWrapper from 'components/ui/lists/ListWrapper';
import ProfileList from 'components/ui/lists/ProfileList';
import CustomText from 'components/ui/text/CustomText';
import CustomDivider from 'components/ui/dividers/CustomDivider';

const Details = ({ user }) => {
  const { name, squadNumber, position, description } = user;
  const details = [
    { text: 'Name', value: name, noDivider: true },
    { text: 'Number', value: squadNumber || '#' },
    { text: 'Position', value: position },
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
