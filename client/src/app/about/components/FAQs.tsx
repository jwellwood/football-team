import React from 'react';
// Data
import { faqs } from '../utils';
// Components
import CustomContainer from 'shared/layout/CustomContainer';
import CustomExpansion from 'lib/components/expansion/CustomExpansion';
import CustomTypography from 'lib/components/typography/CustomTypography';
// Types
import { IFaq } from '../shared';

const FAQs: React.FC = () => {
  return (
    <CustomContainer>
      {faqs.map(({ title, text }: IFaq) => (
        <CustomExpansion key={title} title={title} icon='goal'>
          <CustomTypography>{text}</CustomTypography>
        </CustomExpansion>
      ))}
      ;
    </CustomContainer>
  );
};

export default FAQs;
