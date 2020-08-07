import React, { ReactElement } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import CustomTypography from '../typography/CustomTypography';

interface Props {
  name: string;
  onCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: any;
  label?: string | ReactElement;
  placement?: any;
  checked?: boolean;
  disabled?: boolean;
  isList?: boolean;
  color?: string;
}

const CustomSwitch: React.FC<Props> = ({
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
      label={<CustomTypography size='sm'>{label}</CustomTypography>}
      labelPlacement={placement || 'top'}
    />
  );
};

export default CustomSwitch;
