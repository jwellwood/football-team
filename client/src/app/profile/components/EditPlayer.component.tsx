import React from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import { FormContainer } from 'shared/layout/containers';
import { yearOptions } from 'utils/helpers';
import { profileDetailsHelper } from 'shared/messages/shared';
import { IUserData } from 'shared/types';
import { user_routes } from 'router';
import { Spinner } from 'components/loaders';
import { CenteredGrid } from 'shared/layout/grids';
import { SubmitButton, CustomLinkButton } from 'components/buttons';
import { TextInput, NumberInput, SelectInput } from 'components/inputs';
import { IEditPlayerForm } from '../containers/EditPlayer.container';
import { FormHelper } from 'components/typography';
import { positionOptions } from '../utils';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  loading: boolean;
  input: IEditPlayerForm;
  user: IUserData;
  disabled: boolean;
}

const EditPlayer: React.FC<Props> = ({
  onChange,
  onSubmit,
  loading,
  input,
  user,
  disabled,
}) => {
  const { handleSubmit, errors, register } = useForm();
  const { canEdit } = user;
  const date = new Date().getFullYear();

  const playerForm = (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormHelper>{profileDetailsHelper}</FormHelper>
      <CenteredGrid dir='row'>
        <Grid item xs={6} sm={4}>
          <CustomLinkButton
            type='contained'
            color='primary'
            link={!canEdit.photo ? 'locked' : user_routes.EDIT_PROFILE_IMAGE}
          >
            edit photo
          </CustomLinkButton>
        </Grid>
        <Grid item xs={12} sm={8}>
          <TextInput
            inputName='name'
            defaultValue={input.name}
            onChange={onChange}
            label='Name'
            validators={register({
              required: true,
              minLength: 2,
              maxLength: 20,
            })}
            errors={errors.name}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <NumberInput
            inputName='squadNumber'
            defaultValue={input.squadNumber}
            onChange={onChange}
            label='Squad Number'
            validators={register({ required: true, min: 1, max: 99 })}
            errors={errors.squadNumber}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SelectInput
            inputName='position'
            label='Position'
            defaultValue={input.position || ''}
            onChange={onChange}
            options={positionOptions}
            validators={register({ required: true })}
            errors={errors.position}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <SelectInput
            inputName='yearJoined'
            label='Year Joined'
            defaultValue={input.yearJoined || ''}
            onChange={onChange}
            options={yearOptions(2008, date)}
            errors={errors.yearJoined}
          />
        </Grid>
        <Grid item xs={12}>
          <TextInput
            inputName='description'
            multiline
            defaultValue={input.description}
            onChange={onChange}
            label='Description'
            validators={register({ maxLength: 150 })}
            errors={errors.description}
          />
        </Grid>
      </CenteredGrid>
      <SubmitButton loading={loading} disabled={disabled} />
    </form>
  );

  return !loading ? <FormContainer>{playerForm}</FormContainer> : <Spinner />;
};

export default EditPlayer;
