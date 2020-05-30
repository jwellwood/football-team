import React from 'react';
import { EDIT_USER } from 'router/route_names';
// Components
import ProfileSection from '../ProfileSection';
import ProfileList from 'components/ui/lists/ProfileList';
import ProfileTitle from 'components/ui/headers/SectionTitle';
import ListWrapper from 'components/ui/lists/ListWrapper';
import GridItem from 'components/ui/grids/GridItem';
import { parseDate } from 'components/utils';

const AccountDetails = ({ user }) => {
  const { email, adminStatus, createdAt } = user;
  const details = [
    { text: 'Email', value: email },
    { text: 'Joined', value: parseDate(createdAt) },
    { text: 'Status', value: adminStatus },
  ];
  return (
    <GridItem>
      <ProfileSection title='Account' link={EDIT_USER}>
        <ProfileTitle />
        <ListWrapper>
          <ProfileList details={details} />
        </ListWrapper>
      </ProfileSection>
    </GridItem>
  );
};

export default AccountDetails;
