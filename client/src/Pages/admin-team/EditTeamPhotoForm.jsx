import React from 'react';
import { useForm } from 'react-hook-form';
// Internal
import Spinner from 'lib/components/loading/Spinner';
import TeamPhoto from 'Pages/team/components/TeamPhoto';
import FileInput from 'lib/components/inputs/FileInput';
import SubmitButton from 'lib/components/buttons/SubmitButton';
import FormContainer from 'shared/layout/FormContainer';
import CenteredGrid from 'lib/components/grids/CenteredGrid';
import CustomButton from 'lib/components/buttons/CustomButton';

const EditTeamPhotoForm = ({
  loading,
  onFileSelect,
  imageUrl,
  onUseDefault,
  onSubmit,
  team,
}) => {
  const { handleSubmit } = useForm();
  return !loading ? (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CenteredGrid>
          <FileInput
            name='teamPhoto'
            onChange={onFileSelect}
            label='Team Photo'
          />

          <TeamPhoto image={imageUrl} />
          <CustomButton
            type='reset'
            disabled={loading || imageUrl === 'default'}
            onClick={onUseDefault}
          >
            Use Default
          </CustomButton>
        </CenteredGrid>
        <SubmitButton disabled={loading || team.teamPhoto.url === imageUrl} />
      </form>
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default EditTeamPhotoForm;
