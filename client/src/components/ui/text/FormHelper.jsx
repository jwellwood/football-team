import React from 'react';
// Components
import GreyBackground from 'containers/GreyBackground';
import CustomTypography from './CustomTypography';

const FormHelper = ({ children }) => {
  return (
    <GreyBackground placeholder>
      <CustomTypography size='sm' font='secondary'>
        {children}
      </CustomTypography>
    </GreyBackground>
  );
};

export default FormHelper;
