import React from 'react';
import Spinner from 'lib/components/loading/Spinner';
import CustomButton from 'lib/components/buttons/CustomButton';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import StatIcon from 'components/ui/icons/StatIcon';

interface Props {
  onClick: () => void;
  loading: boolean;
}

const ValidatedEmail: React.FC<Props> = ({ onClick, loading }) => {
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
