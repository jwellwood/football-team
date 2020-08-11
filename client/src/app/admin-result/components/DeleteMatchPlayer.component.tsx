import React from 'react';
import { DeleteModal, CustomModalText } from 'components/modals';

interface Props {
  loading: boolean;
  onDeleteMatchPlayer: () => void;
}

const DeleteMatchPlayer: React.FC<Props> = ({
  loading,
  onDeleteMatchPlayer,
}) => {
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
