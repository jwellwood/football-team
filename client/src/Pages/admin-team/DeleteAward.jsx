import React from 'react';
// Components
import DeleteModal from 'lib/components/modals/DeleteModal';
import CustomModalText from 'lib/components/modals/CustomModalText';

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
