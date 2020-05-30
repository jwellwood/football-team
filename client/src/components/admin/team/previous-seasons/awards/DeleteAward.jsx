import React from 'react';
// Components
import DeleteModal from 'components/ui/modals/DeleteModal';
import CustomModalText from 'components/ui/modals/CustomModalText';

const DeleteAward = ({ loading, onDeleteAward }) => {
  return (
    <DeleteModal title='Award' loading={loading} onDelete={onDeleteAward}>
      <CustomModalText>
        <strong>This action cannot be undone.</strong> You will lose all data
        relating to this award.
      </CustomModalText>
    </DeleteModal>
  );
};

export default DeleteAward;
