import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import CustomText from '../text/CustomText';

const CustomSwitch = ({
  name,
  defaultValue,
  onCheck,
  label,
  placement,
  checked,
  disabled,
  isList,
}) => {
  const customSwitch = (
    <Switch
      color='primary'
      name={name}
      defaultValue={defaultValue}
      checked={checked}
      onChange={onCheck}
      disabled={disabled}
    />
  );

  return isList ? (
    customSwitch
  ) : (
    <FormControlLabel
      control={customSwitch}
      label={<CustomText type='caption'>{label}</CustomText>}
      labelPlacement={placement || 'top'}
    />
  );
};

export default CustomSwitch;
