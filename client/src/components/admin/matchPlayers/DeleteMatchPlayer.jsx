import React from 'react';
// Components
import DeleteModal from 'components/ui/modals/DeleteModal';
import CustomModalText from 'components/ui/modals/CustomModalText';

const DeleteMatchPlayer = ({ loading, onDeleteMatchPlayer }) => {
  return (
    <DeleteModal
      title='Match Player'
      loading={loading}
      onDelete={onDeleteMatchPlayer}
    >
      <CustomModalText>
        <strong>This action cannot be undone.</strong> You will lose all data
        relating to this player for this match
      </CustomModalText>
    </DeleteModal>
  );
};

export default DeleteMatchPlayer;
