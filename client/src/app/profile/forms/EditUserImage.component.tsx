import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { IUserData } from 'shared/types';
import { profilePhotoHelper, button_text } from 'constants/text';
import { Spinner } from 'components/loaders';
import FileInput from 'components/inputs/FileInput';
import { FormContainer } from 'shared/layout/containers';
import { CenteredGrid } from 'shared/layout/grids';
import { SubmitButton, CustomButton } from 'components/buttons';
import { FormHelper } from 'components/typography';
import { CircularImage } from 'components/images';

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
          {button_text.DEFAULT}
        </CustomButton>
      </CenteredGrid>
      <SubmitButton disabled={submitDisabled} loading={loading} />
    </form>
  );

  return !loading ? <FormContainer>{imageForm} </FormContainer> : <Spinner />;
};

export default EditUserImage;
