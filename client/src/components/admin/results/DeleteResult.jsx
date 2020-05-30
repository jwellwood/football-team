import React from 'react';
// Components
import DeleteModal from 'components/ui/modals/DeleteModal';
import CustomModalText from 'components/ui/modals/CustomModalText';

const DeleteResult = ({ loading, onDeleteResult, disabled }) => {
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
