import React from 'react';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { setPermissionsHelper } from 'shared/messages/shared';
import {
  TextInput,
  NumberInput,
  SelectInput,
  CustomSwitch,
} from 'components/inputs';
import { SubmitButton, CustomButton } from 'components/buttons';
import { Spinner } from 'components/loaders';
import { FormContainer } from 'shared/layout/containers';
import { ListWrapper, ListItemWrapper } from 'components/lists';
import { CenteredGrid } from 'shared/layout/grids';
import { CustomDivider } from 'components/dividers';
import { CustomTypography, FormHelper } from 'components/typography';
import { IUserData } from 'shared/types';
import { positionOptions } from 'app/profile/utils';

interface Props {
  user: IUserData;
  loading: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input?: any; // TODO
  onSubmit: () => void;
  onResetImage: () => void;
}

interface IPermissionSwitch {
  title: string;
  name: string;
  checked: boolean;
}

interface IPermissionTargets {
  name: string;
  defaultValue: number;
  label: string;
  errors?: any;
}

const UserPermissionForm: React.FC<Props> = ({
  user,
  loading,
  onChange,
  onCheck,
  input,
  onSubmit,
  onResetImage,
}) => {
  const { handleSubmit, errors, register } = useForm();

  const switches: IPermissionSwitch[] = [
    { title: 'Player', name: 'isPlayer', checked: input.isPlayer },
    { title: 'Admin', name: 'isAdmin', checked: input.isAdmin },
    { title: 'Captain', name: 'isCaptain', checked: input.isCaptain },
    { title: 'Edit Photo', name: 'canEditPhoto', checked: input.canEditPhoto },
    {
      title: 'Edit Details',
      name: 'canEditDetails',
      checked: input.canEditDetails,
    },
    {
      title: 'Edit Targets',
      name: 'canEditTargets',
      checked: input.canEditTargets,
    },
    {
      title: 'Verified',
      name: 'isVerified',
      checked: input.isVerified,
    },
  ];

  const targetInputs: IPermissionTargets[] = [
    {
      name: 'appsTarget',
      defaultValue: input.appsTarget,
      label: 'Apps Target',
      errors: errors.appsTarget,
    },
    {
      name: 'goalsTarget',
      defaultValue: input.goalsTarget,
      label: 'Goals Target',
      errors: errors.goalsTarget,
    },
    {
      name: 'assistsTarget',
      defaultValue: input.assistsTarget,
      label: 'Assists Target',
      errors: errors.assistsTarget,
    },
  ];

  return !loading ? (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormHelper>{setPermissionsHelper}</FormHelper>
        <CustomTypography bold>
          Change permissions for {user.name}
        </CustomTypography>
        <CustomDivider />
        <CenteredGrid dir='row'>
          <Grid item xs={12}>
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
          <Grid item xs={6} sm={4}>
            <NumberInput
              inputName='squadNumber'
              defaultValue={input.squadNumber}
              onChange={onChange}
              label='SquadNumber'
              validators={register({ required: true, min: 0, max: 99 })}
              errors={errors.squadNumber}
            />
          </Grid>
          <Grid item xs={6} sm={8}>
            <SelectInput
              inputName='position'
              defaultValue={input.position}
              label='Position'
              onChange={onChange}
              validators={register({ required: true })}
              errors={errors.position}
              options={positionOptions}
            />
          </Grid>
          {targetInputs.map((input) => (
            <Grid key={input.name} item xs={4} sm={4}>
              <NumberInput
                inputName={input.name}
                defaultValue={input.defaultValue}
                onChange={onChange}
                label={input.label}
                validators={register({ required: true, min: 0, max: 99 })}
                errors={input.errors}
              />
            </Grid>
          ))}
        </CenteredGrid>

        <ListWrapper>
          {switches.map((item, i: number) => (
            <ListItemWrapper key={item.title + i}>
              <ListItemText primary={item.title} />
              <ListItemSecondaryAction>
                <CustomSwitch
                  name={item.name}
                  checked={item.checked}
                  onCheck={onCheck}
                  isList
                />
              </ListItemSecondaryAction>
            </ListItemWrapper>
          ))}
        </ListWrapper>
        <CustomButton
          onClick={onResetImage}
          disabled={user.image.url === 'default'}
        >
          Reset image
        </CustomButton>
        <SubmitButton loading={loading}>Update</SubmitButton>
      </form>
    </FormContainer>
  ) : (
    <Spinner />
  );
};

export default UserPermissionForm;
