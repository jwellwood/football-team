import React from 'react';
import { DeleteModal, CustomModalText } from 'components/modals';

interface Props {
  loading: boolean;
  onDeleteAward: () => void;
}

const DeleteAward: React.FC<Props> = ({ loading, onDeleteAward }) => {
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
