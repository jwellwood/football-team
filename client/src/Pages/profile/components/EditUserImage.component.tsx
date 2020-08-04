import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { IUserData } from 'shared/types';
import { profilePhotoHelper } from 'shared/data/formHelperText';
import Spinner from 'lib/components/loading/Spinner';
import FileInput from 'lib/components/inputs/FileInput';
import FormContainer from 'shared/layout/FormContainer';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import CustomButton from 'lib/components/buttons/CustomButton';
import FormHelper from 'lib/components/typography/FormHelper';
import CircularImage from 'components/ui/images/CircularImage';

interface Props {
  onSubmit: () => void;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUseDefault: () => void;
  loading: boolean;
  user: IUserData;
  imageUrl: string;
}

const EditUserImage: React.FC<Props> = ({
  onSubmit,
  onFileSelect,
  onUseDefault,
  loading,
  user,
  imageUrl,
}) => {
  const { handleSubmit } = useForm();
  const defaultDisabled: boolean = imageUrl === 'default';
  const submitDisabled: boolean = user.image.url === imageUrl;
  const imageForm: ReactElement = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHelper>{profilePhotoHelper}</FormHelper>
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

export default EditUserImage;
