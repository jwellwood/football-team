import React from 'react';
// MUI
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// Internal
import DeleteModal from 'components/ui/modals/DeleteModal';

const DeleteHOF = ({ loading, onDeleteHOF }) => {
  return (
    <DeleteModal title='Hall of Famer' loading={loading} onDelete={onDeleteHOF}>
      <DialogContent>
        <DialogContentText>
          <strong>This action cannot be undone.</strong> You will lose all data
          relating to this hall of famer.
        </DialogContentText>
      </DialogContent>
    </DeleteModal>
  );
};

export default DeleteHOF;
