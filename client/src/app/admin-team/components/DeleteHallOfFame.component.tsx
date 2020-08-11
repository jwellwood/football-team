import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { DeleteModal } from 'components/modals';

interface Props {
  loading: boolean;
  onDeleteHOF: () => void;
}

const DeleteHOF: React.FC<Props> = ({ loading, onDeleteHOF }) => {
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
