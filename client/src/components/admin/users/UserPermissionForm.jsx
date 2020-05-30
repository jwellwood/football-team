import React from 'react';
import { useForm } from 'react-hook-form';
// MUITODO
import Grid from '@material-ui/core/Grid';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
// Functions
import { positionOptions } from 'components/utils/select-options';
// Inputs
import NumberInput from 'components/ui/inputs/NumberInput';
import SelectInput from 'components/ui/inputs/SelectInput';
import TextInput from 'components/ui/inputs/TextInput';
import CustomSwitch from 'components/ui/inputs/CustomSwitch';
import SubmitButton from 'components/ui/buttons/SubmitButton';
// Components
import Spinner from 'components/ui/loading/Spinner';
import FormContainer from 'containers/FormContainer';
import ListWrapper from 'components/ui/lists/ListWrapper';
import ListItemWrapper from 'components/ui/lists/ListItemWrapper';
import CenteredGrid from 'components/ui/grids/CenteredGrid';
import CustomDivider from 'components/ui/dividers/CustomDivider';
import ValueText from 'components/ui/text/ValueText';
import CustomButton from 'components/ui/buttons/CustomButton';

const UserPermissionForm = ({
  user,
  loading,
  onChange,
  onCheck,
  input,
  onSubmit,
  onResetImage,
}) => {
  const { handleSubmit, errors, register } = useForm();

  const switches = [
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
  ];

  const targetInputs = [
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
        <ValueText>{user.name}</ValueText>
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
              errors={errors.name || null}
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <NumberInput
              inputName='squadNumber'
              defaultValue={input.squadNumber}
              onChange={onChange}
              label='SquadNumber'
              validators={register({ required: true, min: 0, max: 99 })}
              errors={errors.squadNumber || null}
            />
          </Grid>
          <Grid item xs={6} sm={8}>
            <SelectInput
              inputName='position'
              defaultValue={input.position}
              label='Position'
              onChange={onChange}
              validators={register({ required: true })}
              errors={errors.position || null}
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
                errors={input.errors || null}
              />
            </Grid>
          ))}
        </CenteredGrid>

        <ListWrapper>
          {switches.map((item, i) => (
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
