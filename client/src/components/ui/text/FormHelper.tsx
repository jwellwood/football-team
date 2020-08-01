import React from 'react';
// Components
import SectionBackground from 'containers/SectionBackground';
import CustomTypography from './CustomTypography';

interface Props {
  children: string;
}

const FormHelper: React.FC<Props> = ({ children }) => {
  return (
    <SectionBackground placeholder>
      <CustomTypography size='sm' font='secondary'>
        {children}
      </CustomTypography>
    </SectionBackground>
  );
};

export default FormHelper;
