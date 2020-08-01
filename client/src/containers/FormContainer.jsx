import React from 'react';
// Components
import SectionBackground from './SectionBackground';
// assets
import CustomContainer from './CustomContainer';

const FormContainer = ({ children }) => {
  return (
    <CustomContainer>
      <SectionBackground bordered placeholder>
        {children}
      </SectionBackground>
    </CustomContainer>
  );
};

export default FormContainer;
