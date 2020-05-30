import React from 'react';
// MUI
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// Internal
import DeleteModal from 'components/ui/modals/DeleteModal';

const DeleteTrophy = ({ loading, onDeleteTrophy }) => {
  return (
    <DeleteModal title='Trophy' loading={loading} onDelete={onDeleteTrophy}>
      <DialogContent>
        <DialogContentText>
          <strong>This action cannot be undone.</strong> You will lose all data
          relating to this trophy
        </DialogContentText>
      </DialogContent>
    </DeleteModal>
  );
};

export default DeleteTrophy;
