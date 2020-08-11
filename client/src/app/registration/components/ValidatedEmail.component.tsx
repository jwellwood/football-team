import React from 'react';
import { Spinner } from 'components/loaders';
import { CustomButton } from 'components/buttons';
import { CenteredGrid } from 'shared/layout/grids';
import StatIcon from 'lib/icons/StatIcon';

interface Props {
  onClick: () => void;
  loading: boolean;
}

const ValidatedEmail: React.FC<Props> = ({ onClick, loading }) => {
  return (
    <CenteredGrid>
      <StatIcon type='app' size='10x' />
      {loading ? (
        <Spinner isSecondary />
      ) : (
        <CustomButton onClick={onClick}>Confirm validation</CustomButton>
      )}
    </CenteredGrid>
  );
};

export default ValidatedEmail;
