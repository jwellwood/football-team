import React from 'react';
// MUI
import ListItemText from '@material-ui/core/ListItemText';
// Functions
import { parseDate } from 'components/utils';
// Routes
import { EDIT_USER } from 'router/route_names';
// Components
import ProfileSection from '../ProfileSection';
import ProfileTitle from 'components/ui/headers/SectionTitle';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import ValueText from 'components/ui/text/ValueText';

const AccountDetails = ({ user }) => {
  const { email, adminStatus, createdAt, updatedAt } = user;

  const details = [
    { text: 'Email', value: email },
    { text: 'Created', value: parseDate(createdAt) },
    { text: 'Last updated', value: parseDate(updatedAt) },
    { text: 'Status', value: adminStatus },
  ];
  return (
    <ProfileSection title='Account' link={EDIT_USER}>
      <ProfileTitle />
      <ListWrapper>
        {details.map((item) => (
          <ListItemWrapper key={item.text}>
            <ListItemText
              primary={item.text}
              secondary={<ValueText>{item.value}</ValueText>}
            />
          </ListItemWrapper>
        ))}
      </ListWrapper>
    </ProfileSection>
  );
};

export default AccountDetails;
