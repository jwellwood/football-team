import React from 'react';
import { DeleteModal, CustomModalText } from 'components/modals';

interface Props {
  loading: boolean;
  onDeleteSeason: () => void;
}

const DeletePrevSeason: React.FC<Props> = ({ loading, onDeleteSeason }) => {
  return (
    <DeleteModal title='Season' loading={loading} onDelete={onDeleteSeason}>
      <CustomModalText>
        <strong>This action cannot be undone.</strong> You will lose all data
        relating to this season <strong>including results and awards</strong>.
      </CustomModalText>
    </DeleteModal>
  );
};

export default DeletePrevSeason;
