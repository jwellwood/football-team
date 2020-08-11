import React from 'react';
import { useForm } from 'react-hook-form';
import { Spinner } from 'components/loaders';
import TeamPhoto from 'app/team/components/TeamPhoto';
import FileInput from 'components/inputs/FileInput';
import { SubmitButton, CustomButton } from 'components/buttons';
import { FormContainer } from 'shared/layout/containers';
import { CenteredGrid } from 'shared/layout/grids';
import { ITeam } from 'shared/types';

interface Props {
  loading: boolean;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imageUrl: string;
  onUseDefault: () => void;
  onSubmit: () => void;
  team: ITeam;
}

const EditTeamPhotoForm: React.FC<Props> = ({
  loading,
  onFileSelect,
  imageUrl,
  onUseDefault,
  onSubmit,
  team,
}) => {
  const { handleSubmit } = useForm();
  const disabled: boolean = team.teamPhoto!.url === imageUrl || loading;
  return !loading ? (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CenteredGrid>
          <FileInput
            inputName='teamPhoto'
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
        <SubmitButton disabled={disabled} />
      </form>
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default EditTeamPhotoForm;
