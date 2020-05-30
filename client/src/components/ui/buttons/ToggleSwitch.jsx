import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const ToggleSwitch = ({ name, onChange, checked, label }) => {
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
