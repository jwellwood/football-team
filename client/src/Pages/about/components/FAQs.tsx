import React from 'react';
import { faqs } from 'shared/data/faqs';
import CustomContainer from 'shared/layout/CustomContainer';
import CustomExpansion from 'lib/components/expansion/CustomExpansion';
import CustomTypography from 'lib/components/typography/CustomTypography';

const FAQs: React.FC = () => {
  return (
    <CustomContainer>
      {faqs.map(({ title, text }) => (
        <CustomExpansion key={title} title={title} icon='goal'>
          <CustomTypography>{text}</CustomTypography>
        </CustomExpansion>
      ))}
      ;
    </CustomContainer>
  );
};

export default FAQs;
