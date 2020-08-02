import React from 'react';
// Components
import SectionBackground from './SectionBackground';
// assets
import CustomContainer from './CustomContainer';

interface Props {
  children: React.ReactNode;
}

const FormContainer: React.FC<Props> = ({ children }) => {
  return (
    <CustomContainer>
      <SectionBackground bordered placeholder>
        {children}
      </SectionBackground>
    </CustomContainer>
  );
};

export default FormContainer;
