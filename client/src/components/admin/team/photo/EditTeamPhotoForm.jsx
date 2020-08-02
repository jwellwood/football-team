import React from 'react';
import { useForm } from 'react-hook-form';
// Internal
import Spinner from 'components/ui/loading/Spinner';
import TeamPhoto from 'components/visitor/team/team-photo/TeamPhoto';
import FileInput from 'components/ui/inputs/FileInput';
import SubmitButton from 'components/ui/buttons/SubmitButton';
import FormContainer from 'shared/layout/FormContainer';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomButton from 'components/ui/buttons/CustomButton';

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
