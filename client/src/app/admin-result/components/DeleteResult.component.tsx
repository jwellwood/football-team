import React from 'react';
import DeleteModal from 'lib/components/modals/DeleteModal';
import CustomModalText from 'lib/components/modals/CustomModalText';

interface Props {
  loading: boolean;
  onDeleteResult: () => void;
  disabled: boolean;
}

const DeleteResult: React.FC<Props> = ({
  loading,
  onDeleteResult,
  disabled,
}) => {
  return (
    <DeleteModal
      title='Result'
      loading={loading}
      onDelete={onDeleteResult}
      disabled={disabled}
    >
      <CustomModalText>
        <strong>This action cannot be undone.</strong> You will lose all data
        relating to this result <strong>including all player stats</strong>. You
        must delete all players from the result before deleting it.
      </CustomModalText>
    </DeleteModal>
  );
};

export default DeleteResult;
