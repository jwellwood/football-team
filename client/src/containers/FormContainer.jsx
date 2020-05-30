import React from 'react';
// Components
import GreyBackground from './GreyBackground';
// assets
import CustomContainer from './CustomContainer';

const FormContainer = ({ children }) => {
  return (
    <CustomContainer>
      <GreyBackground bordered placeholder>
        {children}
      </GreyBackground>
    </CustomContainer>
  );
};

export default FormContainer;
