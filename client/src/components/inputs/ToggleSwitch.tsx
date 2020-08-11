import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

interface Props {
  name: string;
  defaultValue?: boolean;
  onChange: () => void;
  checked: boolean;
  label: string;
}

const ToggleSwitch: React.FC<Props> = ({ name, onChange, checked, label }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          color='primary'
          checked={checked}
          onChange={onChange}
          name={name}
        />
      }
      label={label}
    />
  );
};

export default ToggleSwitch;
