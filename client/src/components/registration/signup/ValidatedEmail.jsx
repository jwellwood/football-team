import React from 'react';
// Components
import Spinner from 'components/ui/loading/Spinner';
import CustomButton from 'components/ui/buttons/CustomButton';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import StatIcon from 'components/ui/icons/StatIcon';

const ValidatedEmail = ({ onClick, loading }) => {
  return (
    <CenteredGrid>
      <StatIcon type='app' size='10x' />
      {loading ? (
        <Spinner isButton />
      ) : (
        <CustomButton onClick={onClick}>Confirm validation</CustomButton>
      )}
    </CenteredGrid>
  );
};

export default ValidatedEmail;
