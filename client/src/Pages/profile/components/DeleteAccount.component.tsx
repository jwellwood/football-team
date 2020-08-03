import React from 'react';
import { IUserData } from 'shared/types';
import TextInput from 'lib/components/inputs/TextInput';
import { IDeleteForm } from '../containers/DeleteAccount.container';
import DeleteModal from 'components/ui/modals/DeleteModal';
import CustomModalText from 'components/ui/modals/CustomModalText';

interface Props {
  user: IUserData;
  input: IDeleteForm;
  loading: boolean;
  onChange: (e) => void;
  onSubmit: () => void;
}

const DeleteAccount: React.FC<Props> = ({
  user,
  input,
  loading,
  onChange,
  onSubmit,
}) => {
  return (
    <DeleteModal
      title='Account'
      loading={loading}
      onDelete={onSubmit}
      disabled={user.name !== input.name}
    >
      <form onSubmit={onSubmit}>
        <CustomModalText>
          <strong>This action cannot be undone.</strong> You will lose all data
          relating to this account. Type your username to continue:
          <TextInput inputName='name' label='Username' onChange={onChange} />
        </CustomModalText>
      </form>
    </DeleteModal>
  );
};

export default DeleteAccount;
