import React from 'react';
import CustomText from './CustomText';
import GreyBackground from 'containers/GreyBackground';

const FormHelper = ({ children }) => {
  return (
    <GreyBackground placeholder>
      <CustomText type='caption'>{children}</CustomText>
    </GreyBackground>
  );
};

export default FormHelper;
