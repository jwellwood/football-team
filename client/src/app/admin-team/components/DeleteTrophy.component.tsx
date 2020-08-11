import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { DeleteModal } from 'components/modals';

interface Props {
  loading: boolean;
  onDeleteTrophy: () => void;
}

const DeleteTrophy: React.FC<Props> = ({ loading, onDeleteTrophy }) => {
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
