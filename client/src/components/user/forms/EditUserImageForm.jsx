import React from 'react';
import { useForm } from 'react-hook-form';
// Internal
import Spinner from 'components/ui/loading/Spinner';
import FileInput from 'components/ui/inputs/FileInput';
import FormContainer from 'containers/FormContainer';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import SubmitButton from 'components/ui/buttons/SubmitButton';
import CustomButton from 'components/ui/buttons/CustomButton';
import CircularImage from 'components/ui/images/CircularImage';

const EditUserImageForm = ({
  onSubmit,
  onFileSelect,
  onUseDefault,
  loading,
  user,
  imageUrl,
}) => {
  const { handleSubmit } = useForm();
  const defaultDisabled = imageUrl === 'default';
  const submitDisabled = user.image.url === imageUrl;
  const imageForm = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CenteredGrid>
        <FileInput
          inputName='image'
          label='Profile Image'
          onChange={onFileSelect}
        />
        <CircularImage image={imageUrl} isPlayer />

        <CustomButton
          type='reset'
          disabled={defaultDisabled}
          onClick={onUseDefault}
        >
          Use Default
        </CustomButton>
      </CenteredGrid>
      <SubmitButton disabled={submitDisabled} loading={loading} />
    </form>
  );

  return !loading ? <FormContainer>{imageForm} </FormContainer> : <Spinner />;
};

export default EditUserImageForm;
