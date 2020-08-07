import React from 'react';
// Components
import DeleteModal from 'lib/components/modals/DeleteModal';
import CustomModalText from 'lib/components/modals/CustomModalText';

const DeletePrevSeason = ({ loading, onDeleteSeason }) => {
  return (
    <DeleteModal
      title='Season'
      loading={loading}
      onDelete={onDeleteSeason}
      // disabled={disabled}
    >
      <CustomModalText>
        <strong>This action cannot be undone.</strong> You will lose all data
        relating to this season <strong>including results and awards</strong>.
      </CustomModalText>
    </DeleteModal>
  );
};

export default DeletePrevSeason;
